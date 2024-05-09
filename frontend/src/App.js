
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}> </Route>
          <Route path="login" element={<Login />}> </Route>
          <Route path="home" element={<Home />}> </Route>
           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
