import React, {useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSignOutAlt } from 'react-icons/fa';
import axios from 'axios';
// import { Modal, Button } from 'react-bootstrap';
// import { BiLogOut } from 'react-icons/bi'; 

const Navbar = () => {
    // const [show, setShow] = useState(false);
    const navigate = useNavigate();
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    

    const handleLogout = () => {
        if (window.confirm('¿Estás seguro de que deseas cerrar sesión?')) {
         
            axios.get('http://localhost:8000/api/cerrarsession/', {withCredentials:true})
            .then((res)=>{
              // navigate('/') 
              localStorage.removeItem('userId');
              navigate('/'); // Redirige al usuario a la página de inicio de sesión
              // setShow(false);
              
              return res.status(200)
            // console.log(res)
          })
            .catch((err)=>{
              // console.log(err)
              return err.status(400)
            })
            navigate('/')
          }
            // navigate('/login'); // Redirige al usuario a la página de login
        }
    
    // const handleLogout=()=>{
    //   axios.get('http://localhost:8000/api/cerrarsession/', {withCredentials:true})
    //   .then((res)=>{
    //     navigate('/') 
        
    //     return res.status(200)
    //   // console.log(res)
    // })
    //   .catch((err)=>{
    //     // console.log(err)
    //     return err.status(400)
    //   })
    //   navigate('/')
    // }
  
  return (
<div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
  <div x-data="{ open: false }" className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
    <div className="p-4 flex flex-row items-center justify-between">
      <p className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Asistente Online  </p>
      <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
          <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
    <nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
      <Link to={'/user_data/:id'} className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" >  CUENTA</Link>
      <Link to={'/cuenta'} className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" >  HISTORICO </Link>
      <Link to={'/balance'} className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" >  GASTOS </Link>
      <Link to={'/tarea'} className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">  TAREA  </Link>
      
      
     
    </nav>
    <div>
                 <button  onClick={handleLogout}  className="flex items-center space-x-2 hover:text-gray-300">
                 <FaSignOutAlt />   <span> CERRAR SESION</span>  
                </button>
    </div> 
   
    {/* segunda version de modal para cerra sesion  */}

    {/* <li><a href="#" /> Cerrar Sesión</a></li>

    {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro de que deseas cerrar sesión?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </Modal.Footer>
      </Modal> */}


  </div>
</div>


  )  
}

export default Navbar