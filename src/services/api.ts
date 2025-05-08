/**
 * API service for making HTTP requests
 */

import { type User } from '../types/user';

/**
 * Base API configuration
 */
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.example.com';
const API_TIMEOUT = 10000; // 10 seconds

/**
 * API response interface
 */
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

/**
 * Error response interface
 */
export interface ApiError {
  status: number;
  message: string;
  errors?: Record<string, string[]>;
}

/**
 * Fetch wrapper with error handling and timeout
 */
export const fetchWithTimeout = async (
  url: string,
  options: RequestInit = {},
  timeout = API_TIMEOUT
): Promise<Response> => {
  const controller = new AbortController();
  const { signal } = controller;

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

/**
 * Process API response
 */
export const processResponse = async <T>(response: Response): Promise<ApiResponse<T>> => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const apiError: ApiError = {
      status: response.status,
      message: errorData.message || response.statusText,
      errors: errorData.errors,
    };
    throw apiError;
  }

  const data = await response.json();
  return {
    data,
    status: response.status,
    message: 'Success',
  };
};

/**
 * User API service
 */
export const userApi = {
  /**
   * Get all users
   */
  getUsers: async (): Promise<ApiResponse<User[]>> => {
    const response = await fetchWithTimeout(`${API_BASE_URL}/users`);
    return processResponse<User[]>(response);
  },

  /**
   * Get user by ID
   */
  getUserById: async (id: number): Promise<ApiResponse<User>> => {
    const response = await fetchWithTimeout(`${API_BASE_URL}/users/${id}`);
    return processResponse<User>(response);
  },

  /**
   * Create a new user
   */
  createUser: async (userData: Omit<User, 'id'>): Promise<ApiResponse<User>> => {
    const response = await fetchWithTimeout(`${API_BASE_URL}/users`, {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    return processResponse<User>(response);
  },

  /**
   * Update an existing user
   */
  updateUser: async (id: number, userData: Partial<User>): Promise<ApiResponse<User>> => {
    const response = await fetchWithTimeout(`${API_BASE_URL}/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
    return processResponse<User>(response);
  },

  /**
   * Delete a user
   */
  deleteUser: async (id: number): Promise<ApiResponse<void>> => {
    const response = await fetchWithTimeout(`${API_BASE_URL}/users/${id}`, {
      method: 'DELETE',
    });
    return processResponse<void>(response);
  },
};

export default userApi;
