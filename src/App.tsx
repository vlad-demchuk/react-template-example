import { Home } from './pages';
import { MainLayout } from './layouts';
import './styles/global.css';

/**
 * Main application component
 */
const App = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};

export default App;
