import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EmployeeForm from '../src/components/EmployeeForm';

test('Submit form adds employee to the list', () => {
  const addEmployeeMock = jest.fn();
  const { getByLabelText, getByText } =
    render(<EmployeeForm addEmployee={addEmployeeMock} />);

  fireEvent.change(getByLabelText('Nombre:'), { target: { value: 'John Doe' } });
  fireEvent.change(getByLabelText('Departamento:'), { target: { value: 'IT' } });
  fireEvent.change(getByLabelText('Cargo:'), { target: { value: 'Developer' } });
  fireEvent.change(getByLabelText('Salario:'), { target: { value: '5000' } });
  fireEvent.change(getByLabelText('Número de hijos:'), { target: { value: '2' } });
  fireEvent.click(getByText('Agregar Empleado'));

  expect(addEmployeeMock).toHaveBeenCalledTimes(1);
  expect(addEmployeeMock).toHaveBeenCalledWith({
    name: 'John Doe',
    department: 'IT',
    position: 'Developer',
    salary: 5000,
    children: 2,
  });
});