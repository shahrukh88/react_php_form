import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'; 
function App() {
  return (
     <Router>
  <div className='container'>
      <Header/>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
         <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
  </div>
  </Router>
  );
}

export default App;
