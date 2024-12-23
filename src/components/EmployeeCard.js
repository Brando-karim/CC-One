// components/EmployeeCard.js
import React, { useContext } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';

const EmployeeCard = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold">{employee.prenom} {employee.nom}</h2>
          <p className="text-gray-600">{employee.poste}</p>
        </div>
        <button
          onClick={() => deleteEmployee(employee.id)}
          className="text-red 5hover:text-red-700"
        >
          ×
        </button>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">Salaire: {employee.salaire.toLocaleString('fr-FR')} €</p>
        <p className="text-gray-700">
          Date d'embauche: {new Date(employee.dateEmbauche).toLocaleDateString('fr-FR')}
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;