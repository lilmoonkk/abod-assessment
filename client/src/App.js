import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import ForgotPassword from './views/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
