import React, { useState } from 'react';

const EmployeeForm = ({ addEmployee }) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [children, setChildren] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const employee = {
      name,
      department,
      position,
      salary: Number(salary),
      children: Number(children),
    };

    addEmployee(employee);

    // Reinicia los campos del formulariO
    setPosition('');
    setSalary('');
    setChildren('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input className='form-control my-4' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
      required />

      <label htmlFor="department">Departamento:</label>
      <input className='form-control my-4' type="text" id="department" value={department} onChange={(e) =>
      setDepartment(e.target.value)} required />

      <label htmlFor="position">Cargo:</label>
      <input className='form-control my-4' type="text" id="position" value={position} onChange={(e) =>
      setPosition(e.target.value)} required />

      <label htmlFor="salary">Salario:</label>
      <input className='form-control my-4' type="number" id="salary" value={salary} onChange={(e) =>
      setSalary(e.target.value)} required />

      <label htmlFor="children">Número de hijos:</label>
      <input className='form-control my-4' type="number" id="children" value={children} onChange={(e) =>
      setChildren(e.target.value)} required />

      <button className='form-control btn btn-primary my-4' type="submit">Agregar Empleado</button>
    </form>
  );
}
export default EmployeeForm