import React from 'react';

const data = [
  { concepto: 'Compra de Supermercado', tipoTarea: 'Administrativo', fechaInicio: '13/04/2024', fechaCierre: '19/06/2024', horaNotificacion: '8:00', estado: 'Failed' },
  { concepto: 'Mejorar Backend', tipoTarea: 'Académico', fechaInicio: '19/06/2024', fechaCierre: '19/06/2024', horaNotificacion: '10:00', estado: 'Warning' },
  { concepto: 'Gestionar Pagos del Mes ', tipoTarea: 'Personal', fechaInicio: '19/06/2024', fechaCierre: '19/06/2024', horaNotificacion: '12:00', estado: 'Processing' },
  { concepto: 'Limpiar el patio el fin de semana', tipoTarea: 'Hogar', fechaInicio: '19/06/2024', fechaCierre: '19/06/2024', horaNotificacion: '14:00', estado: 'Verified' },
  { concepto: 'Presentar el Avance de la Pretesis ', tipoTarea: 'Académico', fechaInicio: '19/06/2024', fechaCierre: '19/06/2024', horaNotificacion: '11:45', estado: 'Processing' },
];

const getStatusClass = (status) => {
  switch(status) {
    case 'Failed':
      return 'text-red-500';
    case 'Warning':
      return 'text-yellow-500';
    case 'Processing':
      return 'text-blue-500';
    case 'Verified':
      return 'text-green-500';
    default:
      return '';
  }
}

const HistoricTable = () => {
  return (
  
    <table className="min-w-full bg-white">
      <thead className="bg-gray-200">
        <tr>
          <th className="py-2">Concepto</th>
          <th className="py-2">Tipo Tarea</th>
          <th className="py-2">Fecha de Inicio</th>
          <th className="py-2">Fecha de Cierre</th>
          <th className="py-2">Hora de Notificacion</th>
          <th className="py-2">Estado</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="text-center border-t">
            <td className="py-2">{item.concepto}</td>
            <td className="py-2">{item.tipoTarea}</td>
            <td className="py-2">{item.fechaInicio}</td>
            <td className="py-2">{item.fechaCierre}</td>
            <td className="py-2">{item.horaNotificacion}</td>
            <td className={`py-2 ${getStatusClass(item.estado)}`}>{item.estado}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HistoricTable;