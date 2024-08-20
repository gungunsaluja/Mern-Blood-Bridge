import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';

function App() {
  return (
    <div>
      <Routes>
        < Route path = '/' element ={<HomePage/>} />
        <Route path = "/login" element = {<Login/>} />
        <Route path = "/register" element = {<Register/>}/>

        
      </Routes>

      
    </div>
  );
}

export default App;
