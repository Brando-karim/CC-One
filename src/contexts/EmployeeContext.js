// contexts/EmployeeContext.js
import React, { createContext, useState } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [salaries, setSalaries] = useState([
    {
      id: 1,
      nom: "Martin",
      prenom: "Sophie",
      poste: "Développeur Frontend",
      salaire: 45000,
      dateEmbauche: "2022-03-15"
    },
    {
      id: 2,
      nom: "Dubois",
      prenom: "Thomas",
      poste: "Designer UI/UX",
      salaire: 42000,
      dateEmbauche: "2021-08-22"
    },
    {
      id: 3,
      nom: "Bernard",
      prenom: "Marie",
      poste: "Chef de Projet",
      salaire: 55000,
      dateEmbauche: "2020-11-30"
    },
    {
      id: 4,
      nom: "Petit",
      prenom: "Lucas",
      poste: "Développeur Backend",
      salaire: 48000,
      dateEmbauche: "2023-01-10"
    }
  ]);

  const addEmployee = (employee) => {
    setSalaries([...salaries, { ...employee, id: salaries.length + 1 }]);
  };

  const deleteEmployee = (id) => {
    setSalaries(salaries.filter(emp => emp.id !== id));
  };

  const updateEmployee = (id, updatedEmployee) => {
    setSalaries(salaries.map(emp => emp.id === id ? updatedEmployee : emp));
  };

  return (
    <EmployeeContext.Provider value={{ salaries, addEmployee, deleteEmployee, updateEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};