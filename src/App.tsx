import { BrowserRouter as Router } from 'react-router-dom';

import { AnimatedRoutes } from './routes/AnimatedRoutes';

const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  )
}

export default App;