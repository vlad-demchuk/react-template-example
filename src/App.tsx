import './styles/global.css';
import AppRouter from './routes/AppRouter.tsx';
import { AuthProvider } from '@/state/contexts/auth';


/**
 * Main application component
 */
const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>);
};

export default App;
