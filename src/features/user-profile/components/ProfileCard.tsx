import { type User } from '../../../types/user';
import { formatDate } from '../../../utils/helpers';
import useUserStatus from '../hooks/useUserStatus';

export interface ProfileCardProps {
  /**
   * User data to display
   */
  user: User;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Additional CSS class names
   */
  className?: string;
}

/**
 * Component to display user profile information in a card format
 */
const ProfileCard = ({
  user,
  onClick,
  className = '',
}: ProfileCardProps) => {
  const { isOnline, lastSeen } = useUserStatus(user.id);

  return (
    <div
      className={`border rounded-lg p-4 shadow-sm ${className}`}
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <img
          src={user.avatar}
          alt={`${user.name}'s avatar`}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
          <div className="flex items-center mt-1">
            <span
              className={`w-2 h-2 rounded-full mr-2 ${isOnline ? 'bg-green-500' : 'bg-gray-400'}`}
            />
            <span className="text-sm text-gray-500">
              {isOnline ? 'Online' : `Last seen ${lastSeen}`}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t pt-3">
        <p className="text-sm">
          <span className="font-medium">Role:</span>
          <span className="ml-2 capitalize">{user.role}</span>
        </p>
        <p className="text-sm mt-1">
          <span className="font-medium">Member since:</span>
          <span className="ml-2">{formatDate(user.createdAt)}</span>
        </p>
        <p className="text-sm mt-1">
          <span className="font-medium">Status:</span>
          <span className={`ml-2 ${user.isActive ? 'text-green-600' : 'text-red-600'}`}>
            {user.isActive ? 'Active' : 'Inactive'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
