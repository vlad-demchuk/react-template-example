/**
 * UserProfile feature-specific type definitions
 */

import { type User } from '../../../types/user';

/**
 * Extended user profile information
 */
export interface UserProfileExtended extends User {
  /**
   * User's biography or description
   */
  bio?: string;
  
  /**
   * User's location
   */
  location?: string;
  
  /**
   * User's website URL
   */
  website?: string;
  
  /**
   * User's social media profiles
   */
  socialProfiles?: SocialProfiles;
  
  /**
   * User's skills or expertise areas
   */
  skills?: string[];
  
  /**
   * User's preferred language
   */
  preferredLanguage?: string;
  
  /**
   * User's notification preferences
   */
  notificationPreferences?: NotificationPreferences;
}

/**
 * Social media profile links
 */
export interface SocialProfiles {
  twitter?: string;
  facebook?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
}

/**
 * User notification preferences
 */
export interface NotificationPreferences {
  email: boolean;
  push: boolean;
  sms: boolean;
  inApp: boolean;
  marketingEmails: boolean;
}

/**
 * Profile visibility settings
 */
export enum ProfileVisibility {
  PUBLIC = 'public',
  PRIVATE = 'private',
  CONTACTS_ONLY = 'contacts_only',
}

/**
 * Profile update request payload
 */
export type ProfileUpdateRequest = Partial<
  Omit<UserProfileExtended, 'id' | 'email' | 'role' | 'createdAt' | 'lastLogin'>
>;
