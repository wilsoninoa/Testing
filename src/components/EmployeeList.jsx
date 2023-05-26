import React from 'react';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h2>Listado de Empleados</h2>
      <table className='mt-5 table table-bordered table-hover'>
        <thead>
          <tr className='table-primary'>
            <th>Nombre</th>
            <th>Departamento</th>
            <th>Cargo</th>
            <th>Salario</th>
            <th>Número de hijos</th>
            <th>Bono Hijos</th>
          </tr>
        </thead>
        <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{employee.name}</td>
            <td>{employee.department}</td>
            <td>{employee.position}</td>
            <td>{employee.salary}</td>
            <td>{employee.children}</td>
            <td>{employee.children * 200}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};
export default EmployeeList