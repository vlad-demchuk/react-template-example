/**
 * UserProfile feature exports
 * 
 * This file serves as the entry point for the UserProfile feature,
 * exporting all components, hooks, and types that should be available
 * to other parts of the application.
 */

// Export components
export { default as ProfileCard } from './components/ProfileCard';
export type { ProfileCardProps } from './components/ProfileCard';

// Export hooks
export { default as useUserStatus } from './hooks/useUserStatus';
export type { UserStatus } from './hooks/useUserStatus';

// Export types
export type { UserProfileExtended } from './types';
export type { 
  SocialProfiles,
  NotificationPreferences,
  ProfileUpdateRequest
} from './types';
export { ProfileVisibility } from './types';

/**
 * Example of how to use this feature in another part of the application:
 * 
 * ```tsx
 * import { ProfileCard, useUserStatus } from 'features/user-profile';
 * import { User } from 'types/user';
 * 
 * const UserProfilePage = () => {
 *   const user: User = {
 *     id: 1,
 *     name: 'John Doe',
 *     email: 'john@example.com',
 *     // ... other user properties
 *   };
 * 
 *   return (
 *     <div>
 *       <h1>User Profile</h1>
 *       <ProfileCard user={user} />
 *     </div>
 *   );
 * };
 * ```
 */
