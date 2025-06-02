import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAuth } from '../state/contexts/auth';
import { mockUsers } from '../data/mockUsers';

const SignInPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const isValidUser = mockUsers.some(user => user.email === email);
    if (!isValidUser) {
      setError('Invalid credentials');
      return;
    }

    login(email, password);
    navigate(state?.pathname ?? '/', { replace: true });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px' }}>
      <h1>Sign In</h1>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Sign In
        </button>
      </form>
      <div style={{ marginTop: '20px', fontSize: '14px' }}>
        <p>Available test accounts:</p>
        <ul>
          {mockUsers.map(user => (
            <li key={user.id}>{user.email} ({user.role})</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SignInPage;
