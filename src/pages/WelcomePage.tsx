import { Link } from 'react-router';

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link to="/signin">Sign In</Link> | <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default WelcomePage;
