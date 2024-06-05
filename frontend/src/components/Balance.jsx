// import React,{useState, useEffect} from 'react'
// import Navbar from './Navbar';
// import {useNavigate} from 'react-router-dom'
// import axios from 'axios';


// const Balance = () => {

//   // const {id} = useParams()
//   const navigate = useNavigate()
//   const [concepto,setconcepto]=useState('')
//   const [monto,setmonto] = useState('')
//   const [periodo,setperiodo] = useState('')
//   const [gastos, setpagos] = useState([])

//     useEffect(()=>{
//         axios.get('http://localhost:8000/api/pagos/', {withCredentials:true})
//         .then((res)=>{
//             console.log(res)
//             setpagos(res.data)
//         }).catch((err)=>{
//             console.log(err)
//         })
//     }, [])

//   const formSubmitHandler =(e)=>{
//     e.preventDefault()
//     axios.post("http://localhost:8000/api/crearpagos",{
//       concepto,
//       monto,
//       periodo
//       // status
      
   
//     },{withCredentials:true, Credential:'include'})
//     .then((res)=>{
//         console.log(res)
//         navigate(`/balance/`)  
//     })
//     .catch((err)=>{
//          return err.status(400)
//     })
//   }     


 

//   return (
//     <div>
//         
//       <div className="flex flex-wrap h-[500vh]">
//         {/* carga de datos */}
//         <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/3 mb-4 bg-white">

//         {/* Tarjeta de carga de datos */}
//         <div className=" flex flex-col justify-center items-center mt-15 m-20">
//             <form className="border-2 border-blue-900 shadow-2xl flex w-full flex-col items-center rounded-[20px] w-[400px] mx-auto p-3 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none" onSubmit={formSubmitHandler}>
//               <div className=" mt-7 mb-5 flex w-full flex-col items-center">
//                 <h3 className="text-3xl sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-blue-900 ">
//                    Gastos
//                 </h3>
//                 <p className="text-2xl sm:text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl font-normal text-orange-500">Tipo de Cuenta</p> */}
//               </div>
//               <div className=" mt-6 mb-3 flex flex-wrap gap-10 md:!gap-5">
//                 <div className="flex flex-col items-center justify-center">
//                   <p className="text-2xl sm:text-1xl md:text-1xl xl:text-1xl 1xl:text-3xl font-normal text-black">Ingreso</p>
//                   <p className="text-2xl sm:text-1xl md:text-1xl xl:text-1xl 1xl:text-3xl font-bold text-green-800 dark:text-white">500.000</p>
//                 </div>
//                 <div className="flex flex-col items-center justify-center">
//                   <p className="text-2xl sm:text-1xl md:text-1xl xl:text-1xl 1xl:text-3xl font-normal text-black">Egreso</p>
//                   <p className="text-2xl sm:text-1xl md:text-1xl xl:text-1xl 1xl:text-3xl font-bold text-green-800 dark:text-white">-150.000</p>
//                 </div>
//                </div> 
//               {/* Inputs de conceptos  */}
//                 <div className='flex flex-col w-full' >

//                 <div>
//                   <label className="text-2xl text-blue-900 " for="username">Concepto</label>
//                   <input id="username" type="text"  placeholder='Servicio 'className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-900 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" onChange={(e)=>setconcepto(e.target.value)}/>
//                 </div>

//                 <div>
//                   <label className="text-2xl text-blue-900 " for="username">Monto</label>
//                   <input id="username" type="number" placeholder='Ingrese el monto' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-900 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"  onChange={(e)=>setmonto(e.target.value)}/>
//                 </div>
//                 <div>
//                   <label className="text-2xl text-blue-900 " for="username">Periodo</label>
//                   <input id="username" type="month" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-900 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
//                 </div>

//                 </div>

//               {/* botones de ingreso y egreso */}
//               <div className='grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2'>
//                 <div className="flex justify-end mt-6">
//                 <button className="px-8 py-3 leading-5 text-white text-2xl transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-700 focus:outline-none focus:bg-gray-600">Ingreso</button>
//               </div>
//               <div className="flex justify-end mt-6">
//                 <button className="px-8 py-3 leading-5 text-white text-2xl transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-700 focus:outline-none focus:bg-gray-600">Egreso</button>
//               </div>
//                 </div>
//             </form>

//           </div>

//         </div>
//         historial de la carga de datos 
//         <div className="w-full sm:w-full md:w-full lg:w-2/3 xl:w-2/3 mb-4 bg-white">
//             <div className=' flex w-full justify-center align-center m-2 text-2xl' >
//             </div>
//           tarjeta del historial
//         <div className="flex flex-col justify-center items-stretch mt-10 m-10">
            
//             <div className=' overflow-auto border-3 border-blue-900 bg-white shadow-4xl flex w-full flex-col items-center rounded-[20px] w-[550px] mx-auto m-2 p- bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none' >


//             <h2 className="text-blue-900 " >Historial </h2>

//             <div className="border-2 border-red-900 bg-red-100 shadow-2xl flex w-full flex-col items-center rounded-[20px] w-[400px] mx-auto m-5 p-1  bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
//               <div className=" bg-red-100 mt-3 mb-5 flex w-full items-center justify-around">
//                 <p className="text-1xl sm:text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl font-normal text-red-900 dark:text-white">Servicio </p>
//                 <p className="text-1xl sm:text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl font-normal text-red-900 dark:text-white">monto</p>
//                 <p className="text-1xl sm:text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl font-normal text-red-900 dark:text-white">Mes:</p>
//               </div>
//             </div>
//             </div>

//           </div>

//         </div>
        
//       </div>
//     </div>
//   )
// }

// export default Balance;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/style.css";
import Navbar from './Navbar';



const Balance = () => {
  const [concepto, setConcepto] = useState('');
  const [monto, setMonto] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [tipo, setTipo] = useState('Ingreso');
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/pagos/', { withCredentials: true })
      .then(res => {
        console.log(res);
        setTasks(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const nuevoPago = { concepto, monto, periodo, tipo };

    axios.post('http://localhost:8000/api/crearpagos', nuevoPago, { withCredentials: true, Credential: 'include' })
      .then(res => {
        console.log(res);
        navigate('/balance');
        setTasks([...tasks, res.data]); // Actualiza la lista de tareas con el nuevo pago
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
    <Navbar/>
    <div className="balance-page">
      
      <form onSubmit={formSubmitHandler} className="form-container">
      <h3 className=" text-blue-900 ">  <strong>Gastos: </strong>   </h3>
        <div className='mt-6 mb-3 flex flex-wrap gap-10 md:!gap-5'>
          <label>Concepto</label>
          <input className='text-1xl sm:text-1xl md:text-1xl xl:text-2xl 2xl:text-2xl font-normal text-blue-900'
            type="text"  value={concepto}  onChange={(e) => setConcepto(e.target.value)}
          />
        </div>
        <div className='mt-6 mb-3 flex flex-wrap gap-10 md:!gap-5'>
          <label>Monto</label>
          <input className='text-1xl sm:text-1xl md:text-1xl xl:text-2xl 2xl:text-2xl font-normal text-blue-900'
            type="text"  value={monto} onChange={(e) => setMonto(e.target.value)}
          />
        </div>
        <div className='mt-6 mb-3 flex flex-wrap gap-10 md:!gap-5'>
          <label>Periodo</label>
          <input className='text-1xl sm:text-1xl md:text-1xl xl:text-2xl 2xl:text-2xl font-normal text-blue-900'
            type="moth"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
          />
        </div>
        <div className="buttons-container">
          <button type="button" onClick={() => setTipo('Ingreso')} className="btn-ingreso">Ingreso</button>
          <button type="button" onClick={() => setTipo('Egreso')} className="btn-egreso">Egreso</button>
        </div>
        {/* <button type="submit" className="btn-submit">Agregar Tarea</button> */}
      </form>

      <div className="task-container">
        <h2>Historial</h2>
        {tasks.map(task => (
          <div
            key={task._id}
            className={`card ${task.tipo === 'Ingreso' ? 'ingreso' : 'egreso'}`}
          >
            <h4>{task.concepto}</h4>
            <p>Gs.{task.monto}</p>
          </div>
        ))}
      </div>
    </div>

    </>
  );
};

export default Balance;

