import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './i18n';

import AppRoutes from './pages/AppRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
