import React from 'react';
import Navbar from './Navbar';
import HistoricTable from './HistoricTable';


function Historic() {
  return (
    <>
      <Navbar />
     <div className="container mx-auto p-4">
  
      <main>
        <br />
      <h1 className="px-4  text-3xl font-bold border-blue-900 rounded-md dark:text-gray-300 dark:border-gray-600">Historico </h1>
        <br />
        <div className="flex space-x-4 mb-4">
          <input type="text" placeholder="Tipo" className="border p-2 w-1/2" />
          <input type="text" placeholder="Estado" className="border p-2 w-1/2" />
          <button className="bg-blue-500 text-white p-2">Buscar</button>
        </div>
        <br />
        <HistoricTable />
      </main>
    </div>
    </>
     
    
   
  );
}

export default Historic;