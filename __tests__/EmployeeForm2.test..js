import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EmployeeForm from '../src/components/EmployeeForm';

test('Displays error message when form is submitted with missing fields', () => {
  const { getByText } = render(<EmployeeForm />);
  fireEvent.click(getByText('Agregar Empleado'));
  expect(getByText('Por favor, completa todos los campos')).toBeInTheDocument();
});