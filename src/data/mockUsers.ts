/**
 * Mock user data for development and testing
 */

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'editor';
  avatar: string;
  createdAt: string;
  lastLogin: string | null;
  isActive: boolean;
}

/**
 * A collection of mock users for development and testing
 */
export const mockUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
    avatar: 'https://i.pravatar.cc/150?u=1',
    createdAt: '2023-01-15T08:30:00Z',
    lastLogin: '2023-05-20T14:25:30Z',
    isActive: true,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'editor',
    avatar: 'https://i.pravatar.cc/150?u=2',
    createdAt: '2023-02-10T10:15:00Z',
    lastLogin: '2023-05-19T09:45:12Z',
    isActive: true,
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'user',
    avatar: 'https://i.pravatar.cc/150?u=3',
    createdAt: '2023-03-05T15:45:00Z',
    lastLogin: '2023-05-15T11:30:45Z',
    isActive: true,
  },
  {
    id: 4,
    name: 'Alice Williams',
    email: 'alice.williams@example.com',
    role: 'user',
    avatar: 'https://i.pravatar.cc/150?u=4',
    createdAt: '2023-03-20T09:00:00Z',
    lastLogin: null,
    isActive: false,
  },
  {
    id: 5,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    role: 'editor',
    avatar: 'https://i.pravatar.cc/150?u=5',
    createdAt: '2023-04-12T13:20:00Z',
    lastLogin: '2023-05-18T16:10:22Z',
    isActive: true,
  },
];

/**
 * Get a user by ID
 */
export const getUserById = (id: number): User | undefined => {
  return mockUsers.find(user => user.id === id);
};

/**
 * Get users by role
 */
export const getUsersByRole = (role: User['role']): User[] => {
  return mockUsers.filter(user => user.role === role);
};

/**
 * Get active users
 */
export const getActiveUsers = (): User[] => {
  return mockUsers.filter(user => user.isActive);
};
