/**
 * User-related type definitions
 */

/**
 * User interface representing a user in the system
 */
export interface User {
  /**
   * Unique identifier for the user
   */
  id: number;
  
  /**
   * User's full name
   */
  name: string;
  
  /**
   * User's email address
   */
  email: string;
  
  /**
   * User's role in the system
   */
  role: UserRole;
  
  /**
   * URL to the user's avatar image
   */
  avatar: string;
  
  /**
   * ISO timestamp of when the user was created
   */
  createdAt: string;
  
  /**
   * ISO timestamp of the user's last login, or null if they haven't logged in
   */
  lastLogin: string | null;
  
  /**
   * Whether the user account is active
   */
  isActive: boolean;
}

/**
 * Possible user roles in the system
 */
export type UserRole = 'admin' | 'user' | 'editor';

/**
 * User creation payload - omits system-generated fields
 */
export type CreateUserPayload = Omit<User, 'id' | 'createdAt' | 'lastLogin'>;

/**
 * User update payload - all fields are optional
 */
export type UpdateUserPayload = Partial<Omit<User, 'id' | 'createdAt'>>;

/**
 * User authentication credentials
 */
export interface UserCredentials {
  email: string;
  password: string;
}

/**
 * User authentication response
 */
export interface AuthResponse {
  user: User;
  token: string;
  expiresAt: string;
}
