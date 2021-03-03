import { React, useState, useEffect } from "react";
import Employee from "./model/Employee";

const Employees = ({ title }) => {
  const [employees, setEmployees] = useState([

  ]);

  useEffect(() => {
    const getEmpyees = async () => {
      const employeesFromDb = await fetchEmpyees();
      setEmployees(employeesFromDb);
    };
    getEmpyees();
  }, []);

  // Get Data
  // http:localhost.... should come from json file. no hardcoding please
  const fetchEmpyees = async () => {
    const response = await fetch(
      "http://localhost:8080/rest/api/Employee.svc/employees"
    );
    const data = await response.json();
    return data;
  };

  let colorBlue = false;
  let colorToggle = "white";

  const setColors = () => {
    colorBlue = !colorBlue;
    {
      colorBlue ? (colorToggle = "#e8fffc") : (colorToggle = "#d1ede9");
    }
    return colorToggle;
  };

  const deleteEmployee = async (id) => {
    // console.log("Deleting employee: " + id);
    await fetch(`http://localhost:8080/rest/api/Employee.svc/employee(${id})`, {
      method: "DELETE",
    });

    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const updateEmployee = async (id) => {
    // 
  }


  return (
    <div className="employees">
      {employees.map((employee) => (
        <Employee
          key={employee.id}
          empId={employee.id}
          name={employee.name}
          lastName={employee.last_name}
          status={employee.status}
          email={employee.email}
          color={setColors()}
          onDelete={deleteEmployee}
        />
      ))}
    </div>
  );
};

export default Employees;
