import React, {useState} from "react";

import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import SalaryByPosition from './components/SalaryByPosition';
import BonusByPosition from './components/BonusByPosition';

//import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">PAGOS A EMPLEADOS</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} />
      <SalaryByPosition employees={employees} />
      <BonusByPosition employees={employees} />
    </div>
  );
};

export default App;