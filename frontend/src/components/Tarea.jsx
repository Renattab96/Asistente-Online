import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import moment from 'moment';
import BtnTareaProgress from './BtnTareaProgress';
import BtnTareaCompleta from './BtnTareaCompleta';
import BtnTareaEliminada from './BtnTareaEliminada';

const Task = () => {
  // Variables de estado
  const [accion, setAccion] = useState('');
  const [status, setStatus] = useState('uno');
  const [fechainicio, setinicio] = useState('');
  const [fechavencimiento, setFechavencimiento] = useState('');
  const [claseTarea, settipotarea] = useState('');  
  const [hora, sethora] = useState('');
  const [descripcion, setDescripcion] = useState(''); // Nueva variable de estado para el textarea
  const [projects, setProjects] = useState([]);

  const fetchTareas = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/tareas');
      setProjects(response.data);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  };

  const addProyecto = (e) => {
    e.preventDefault();
    const nuevaTarea = {
      accion,           // Usar el valor del estado
      fechainicio,      // Usar el valor del estado
      fechavencimiento, // Usar el valor del estado
      status,           // Usar el valor del estado
      claseTarea,       // Usar el valor del estado
      hora ,        // Usar el valor del estado
      descripcion       // Usar el valor del estado
    };
    axios.post(`http://localhost:8000/api/creartarea`, nuevaTarea)
      .then((res) => {
        console.log(res);
        fetchTareas(); // Llamar a fetchTareas para actualizar la lista de tareas después de crear una nueva tarea
      }).catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTareas();
  }, []);
 
 

  return (
    <>
      <Navbar />

      <div className="flex h-[100vh] bg-white ">
        {/* carga de datos */}
        <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3 mb-2">
          {/* tarjeta del historial */}
          
          <div className="flex flex-col justify-center items-stretch mt-10 m-10">
          <h1 className="text-3xl font-bold border-blue-900 rounded-md dark:text-gray-300 dark:border-gray-600">Tareas</h1>

            <div className=' overflow-auto bg-white shadow-2xl flex w-full flex-col items-center rounded-[20px] w-[400px] mx-auto m-2 p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none' >
              <div className='dashboard-tab'>
              <table className='table-fixed w-full text-center'>
                  <thead className='border-b-4 border-blue-900'>
                    <tr>
                      <th scope="col-1" className='col-1 text-2xl text-blue-800'>Pendiente</th>
                      <th scope="col-2" className='col-2 text-2xl text-blue-800'>En Curso</th>
                      <th scope="col-3" className='col-3 text-2xl text-blue-800'>Finalizada</th>
                    </tr>
                  </thead>
                  <tbody className='align-top'>
                    <tr>
                      <td className='td-css'>
                        <div className='text-gray-700 td-css grid grid-cols-1 gap-4 p-2 m-2'>
                          {projects.filter(pro => pro.status === 'uno').map(pro =>
                            <div key={pro._id} className='task-card-border border-blue-500 border-4 p-2 m-2 rounded-[20px]'>
                              <h1><strong>Recordar: </strong>{pro.accion}</h1>
                              <h5><strong>Inicio </strong>  {moment(pro.fechainicio).format('MM-DD-YYYY')}</h5>
                              <h5><strong>Vencimiento :</strong>  {moment(pro.fechavencimiento).format('MM-DD-YYYY')}</h5>
                              <h5><strong>Hora de Notificación:</strong> {moment(pro.hora, 'HH:mm').format('HH:mm')}</h5>
                              <h5><strong>Tipo:</strong> {pro.claseTarea}</h5> 
                              <h6><strong>Mas Informacion:</strong> {pro.descripcion}</h6> 
                              <BtnTareaProgress projectId={pro._id} Update={fetchTareas} />
                            </div>
                          )}
                        </div>
                      </td>
                      <td className='td-css'>
                      <div className='grid grid-cols-1 gap-4 p-2 m-2'>
                          {projects.filter(pro => pro.status === 'dos').map(pro =>
                            <div key={pro._id} className='task-card-border text-gray-700 border-blue-500 border-4 p-2 m-2 rounded-[20px]'>
                              <h1><strong>Recordar: </strong>{pro.accion}</h1>
                              <h5><strong>Inicio </strong>  {moment(pro.fechainicio).format('MM-DD-YYYY')}</h5>
                              <h5><strong>Vencimiento :</strong>  {moment(pro.fechavencimiento).format('MM-DD-YYYY')}</h5>
                              <h5><strong>Hora de Notificación:</strong> {moment(pro.hora, 'HH:mm').format('HH:mm')}</h5>
                              <h5><strong>Tipo:</strong> {pro.claseTarea}</h5>
                              <h6><strong>Mas Informacion:</strong> {pro.descripcion}</h6> 
                              <BtnTareaCompleta projectId={pro._id} Update={fetchTareas} />
                            </div>
                          )}
                        </div>
                      </td>
                      <td className='td-css'>
                        <div className='grid grid-cols-1 gap-4 p-2 m-2'>
                          {projects.filter(pro => pro.status === 'tres').map(pro =>
                            <div key={pro._id} className='task-card-border text-gray-700 border-blue-500 border-4 p-2 m-2 rounded-[20px]'>
                              <h1><strong>Recordar: </strong>{pro.accion}</h1>
                              <h5><strong>Inicio </strong>  {moment(pro.fechainicio).format('MM-DD-YYYY')}</h5>
                              <h5><strong>Vencimiento :</strong>  {moment(pro.fechavencimiento).format('MM-DD-YYYY')}</h5>
                              <h5><strong>Hora de Notificación:</strong> {moment(pro.hora, 'HH:mm').format('HH:mm')}</h5>
                              <h5><strong>Tipo:</strong> {pro.claseTarea}</h5>
                              <h6><strong>Mas Informacion:</strong> {pro.descripcion}</h6> 
                              <BtnTareaEliminada projectId={pro._id} Update={fetchTareas} />
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className='tfoot-btn'></tfoot>
                </table>
              </div>
            </div>
          </div >
        </div >

        {/* historial de la carga de datos */}
        < div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 mb-2 2xl:w-1/3" >
          {/* Tarjeta de carga de datos */}
          < div className=" flex flex-col justify-center items-center mt-20 m-20" >
            <form onSubmit={addProyecto} className="border-0 border-blue-900 shadow-2xl flex w-full flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none" >
              {/* <div className=" mt-7 mb-5 flex w-full flex-col items-center">
                <h3 className="text-2xl sm:text-2xl md:text-3xl xl:text-3xl 2xl:text-3xl font-bold text-blue-900 dark:text-white">
                  Actividades
                </h3>
                <p className="text-2xl sm:text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl font-normal text-orange-500"></p>
              </div> */}
              <div className=" mt-6 mb-3 flex flex-wrap gap-10 md:!gap-5">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-1xl sm:text-1xl md:text-1xl xl:text-2xl 2xl:text-2xl font-normal text-blue-900">Carga el Tablero </p>
                  {/* <p className="text-2xl sm:text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl font-bold text-blue-800 dark:text-white">Fecha</p> */}
                </div>

              </div>
              {/* Inputs de conceptos  */}
              <div className='flex flex-col w-full' >

                <div>
                  <label className="text-1xl text-blue-900" htmlFor="username">Descripcion</label>
                  <input id="username" type="text" className="block w-full px-4 py-2 mt-2  bg-white border border-blue-900 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder='Descripcion'
                    onChange={(e) => setAccion(e.target.value)} value={accion} />
                </div>
                <div>
                  <label className="text-1xl text-blue-900" htmlFor="username">Estado </label>
                  <input id="username" type="text" className="block w-full px-4 py-2 mt-2 bg-white border border-blue-900 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder='Estado'
                    onChange={(e) => setStatus(e.target.value)} value={status} />
                </div>
                <div>
                  <label className="text-1xl text-blue-900" htmlFor="username">Fecha Inicio</label>
                  <input id="username" type="date" className="block w-full px-4 py-2 mt-2  bg-white border border-blue-900 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  onChange={(e) => setinicio(e.target.value)} value={fechainicio} />
                </div>
                <div>
                  <label className="text-1xl text-blue-900" htmlFor="username">Fecha Fin </label>
                  <input id="username" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-900 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    onChange={(e) => setFechavencimiento(e.target.value)} value={fechavencimiento} />
                </div>

               
                <label  className="text-1xl text-blue-900" for="opciones">Tipo</label>
            
                  <select  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-900 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 "  name="tipo-tarea" placeholder='Seleccione un tipo '
                  onChange={(e) => settipotarea(e.target.value)} value={claseTarea}>
                      <option value="Hogar">Hogar</option>
                      <option value="Administrativo">Administrativo</option>
                      <option value="Academico">Academico </option>
                      <option value="Laboral">Laboral </option>
                      <option value="Personal">Personal </option>
                  </select>
               
                
                <div>
                  <label className="text-1xl text-blue-900 " htmlFor="username">Hora de Notificacion</label>
                  <input id="username" type="time" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-900 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" 
                  onChange={(e) => sethora(e.target.value)} value={hora}/>
                </div>  

                <div>
                  <label className="text-1xl text-blue-900" htmlFor="descripcionAdicional">Descripción Adicional</label>
                  <textarea id="descripcionAdicional" className="block w-full px-4 py-2 mt-2 bg-white border border-blue-900 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    onChange={(e) => setDescripcion(e.target.value)} value={descripcion}></textarea>
                </div>
              </div>

              {/* botones de ingreso y egreso */}
              <div className='grid grid-cols-1 gap-6 mt-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
                <div className="flex justify-end mt-6">
                  <button className="px-8 py-3 leading-5 text-white text-2xl transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-700 focus:outline-none focus:bg-gray-600">Agregar Tarea</button>
                </div>
                {/* boton de Egreso  */}
                {/* <div className="flex justify-end mt-6">
                <button className="px-8 py-3 leading-5 text-white text-2xl transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-700 focus:outline-none focus:bg-gray-600">Egreso</button>
                </div> */}
              </div>
            </form>
          </div >
        </div >
      </div >
    </>

  )
}

export default Task
