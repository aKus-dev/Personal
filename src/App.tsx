import { BrowserRouter as Router } from 'react-router-dom';

import { AnimatedRoutes } from './routes/AnimatedRoutes';
import { useTheme } from './hooks';

const App = () => {

  const { theme } = useTheme();

  return (
    <div className={theme}>
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  )
}

export default App;