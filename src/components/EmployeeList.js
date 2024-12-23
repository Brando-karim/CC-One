// components/EmployeeList.js
import React, { useContext } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';
import EmployeeCard from './EmployeeCard';

const EmployeeList = () => {
  const { salaries } = useContext(EmployeeContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Liste des Salariés</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {salaries.map(employee => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;