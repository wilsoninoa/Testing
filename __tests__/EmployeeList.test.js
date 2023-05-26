import React from 'react';
import { render } from '@testing-library/react';
import EmployeeList from '../src/components/EmployeeList';
import '@testing-library/jest-dom';

test('Renders employee list correctly', () => {
  const employees = [
    { name: 'John Doe', department: 'IT', position: 'Developer', salary: 5000, children: 2 },
    { name: 'Jane Smith', department: 'HR', position: 'Manager', salary: 7000, children: 1 },
  ];
  const { getByText } = render(<EmployeeList employees={employees} />);

  expect(getByText('John Doe')).toBeInTheDocument();
  expect(getByText('Jane Smith')).toBeInTheDocument();
})