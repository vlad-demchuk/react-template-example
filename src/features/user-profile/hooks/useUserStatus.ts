import { useEffect, useState } from 'react';

/**
 * User status information
 */
export interface UserStatus {
  /**
   * Whether the user is currently online
   */
  isOnline: boolean;

  /**
   * Human-readable string indicating when the user was last seen
   */
  lastSeen: string;
}

/**
 * Hook to get and monitor a user's online status
 *
 * @param userId - The ID of the user to monitor
 * @returns User status information
 */
const useUserStatus = (userId: number): UserStatus => {
  const [status, setStatus] = useState<UserStatus>({
    isOnline: false,
    lastSeen: 'recently',
  });

  useEffect(() => {
    // In a real app, this would connect to a real-time service
    // or poll an API endpoint to get the user's status

    // Simulate random online status for demo purposes
    const isOnline = Math.random() > 0.5;

    // Generate a random "last seen" time for offline users
    const getRandomLastSeen = () => {
      const times = [
        'a few moments ago',
        'about 5 minutes ago',
        'about 30 minutes ago',
        'about 1 hour ago',
        'yesterday',
        'a few days ago',
      ];
      return times[Math.floor(Math.random() * times.length)];
    };

    setStatus({
      isOnline,
      lastSeen: getRandomLastSeen(),
    });

    // In a real app, we would set up listeners here and clean them up in the return function
    return () => {
      // Cleanup function would remove listeners
    };
  }, [userId]);

  return status;
};

export default useUserStatus;
