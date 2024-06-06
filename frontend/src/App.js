import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Balance from './components/Balance';
import Login from './components/Login';
import Register from './components/Register';
import Task from './components/Tarea';
import UserData from './components/Historic';
import Historial from './components/Cuenta';
import Cuenta from './components/Cuenta';
import Historic from './components/Historic';


function App() {
  
  return (

    //  <Link to='/'>Login</Link> || {' | '}
    //   <Link to='/register'>Register</Link> || {' | '}
    //   <Link to='/tarea'>Tarea</Link> || {' | '}
    //   <Link to='/user_data/:id'>Usuario</Link> || {' | '}
    //   <Link to='/balance'>Balance</Link> || {' | '}  
    
    <div>
      <Routes>
      
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/tarea' element={<Task />} />
        <Route path='/historico' element={<Historic/>} />   
        <Route path='/balance' element={<Balance/>} />
        <Route path='/user_data/:id' element={< Cuenta/>} />
       
       
       
      </Routes>
      
    </div>
  );
}


export default App;
