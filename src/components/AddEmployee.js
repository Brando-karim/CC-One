// components/AddEmployee.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from '../contexts/EmployeeContext';

const AddEmployee = () => {
  const navigate = useNavigate();
  const { addEmployee } = useContext(EmployeeContext);
  const [newEmployee, setNewEmployee] = useState({
    nom: '',
    prenom: '',
    poste: '',
    salaire: '',
    dateEmbauche: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee({
      ...newEmployee,
      salaire: Number(newEmployee.salaire)
    });
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Ajouter un Salarié</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nom</label>
          <input
            type="text"
            name="nom"
            value={newEmployee.nom}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Prénom</label>
          <input
            type="text"
            name="prenom"
            value={newEmployee.prenom}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Poste</label>
          <input
            type="text"
            name="poste"
            value={newEmployee.poste}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Salaire</label>
          <input
            type="number"
            name="salaire"
            value={newEmployee.salaire}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Date d'embauche</label>
          <input
            type="date"
            name="dateEmbauche"
            value={newEmployee.dateEmbauche}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;