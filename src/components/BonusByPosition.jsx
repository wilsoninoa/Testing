import React from 'react';

const BonusByPosition = ({ employees }) => {
  const positions = [...new Set(employees.map((employee) => employee.position))];
  const getBonusStats = (position) => {
  const filteredEmployees = employees.filter((employee) => employee.position === position);
  const bonuses = filteredEmployees.map((employee) => employee.children * 200);
  const minBonus = Math.min(...bonuses);
  const maxBonus = Math.max(...bonuses);
  const avgBonus = bonuses.reduce((acc, curr) => acc + curr, 0) / bonuses.length;

  return {
    minBonus,
    maxBonus,
    avgBonus,
  };
 };

 return (
  <div>
    <h2>Bono Hijos por Cargo</h2>
    <ul>
    {positions.map((position, index) => (
      <li key={index}>
        <strong>{position}</strong> - Mínimo: {getBonusStats(position).minBonus} | Máximo:{''}
        {getBonusStats(position).maxBonus} | Promedio: {getBonusStats(position).avgBonus}
      </li>
    ))}
    </ul>
  </div>
 );
};
export default BonusByPosition;
