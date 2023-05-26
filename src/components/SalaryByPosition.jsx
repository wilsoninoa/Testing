import React from 'react';

const SalaryByPosition = ({ employees }) => {
  const positions = [...new Set(employees.map((employee) => employee.position))];
  const getSalaryStats = (position) => {
  const filteredEmployees = employees.filter((employee) => employee.position === position);
  const salaries = filteredEmployees.map((employee) => employee.salary);
  const minSalary = Math.min(...salaries);
  const maxSalary = Math.max(...salaries);
  const avgSalary = salaries.reduce((acc, curr) => acc + curr, 0) / salaries.length;

  return {
    minSalary,
    maxSalary,
    avgSalary,
  };
};

return (
  <div>
    <h2>Salarios por Cargo</h2>
    <ul>
    {positions.map((position, index) => (
      <li key={index}>
        <strong>{position}</strong> - Mínimo: {getSalaryStats(position).minSalary} | Máximo:{''}
        {getSalaryStats(position).maxSalary} | Promedio: {getSalaryStats(position).avgSalary}
      </li>
    ))}
    </ul>
  </div>
 );
};
export default SalaryByPosition