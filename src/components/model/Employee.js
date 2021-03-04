import { React, useState } from "react";
import PropTypes from "prop-types";
import { FaRegTrashAlt, FaRegSave } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";

// empId,
// name,
// lastName,
// status,
// email,

const Employee = ({ employee, color, onDelete }) => {
  const [isActive, setReadOnly] = useState(true);
  const [saveVisible, setSaveVisible] = useState(false);

  const editData = (e) => {
    const id = e.target.id;
    setReadOnly(!isActive);
    setSaveVisible(!saveVisible);
    console.log("Edit...", id);
  };

  const save = (e) => {
    const id = e.target.id;
    const name = e.target.getAttribute("name");
    // let name = e.target.getAttribute("employeeName");
    const employee = { employee };
    console.log("SELECTED ITEM:", employee);
    setSaveVisible(!saveVisible);
    // onSave(id);
    return employee;
  };

  return (
    <div></div>
    // <div
    //   // id={employee.id}
    //   className="employeeComponent"
    //   style={{ backgroundColor: color }}
    // >
    //   <input
    //     className="tableCollumn"
    //     id="employeeId"
    //     type="text"
    //     // defaultValue={employee.id}
    //     readOnly
    //   />
    //   <input
    //     className="tableCollumn"
    //     id="employeeName"
    //     type="text"
    //     // defaultValue={employee.name}
    //     readOnly={isActive}
    //   />
    //   <input
    //     className="tableCollumn"
    //     id="employeeLastName"
    //     type="text"
    //     // defaultValue={employee.lastName}
    //     readOnly={isActive}
    //   />
    //   <input
    //     className="tableCollumn"
    //     id="employeeEmail"
    //     type="text"
    //     // defaultValue={employee.email}
    //     readOnly={isActive}
    //   />

    //   <input
    //     className="tableCollumn"
    //     id="employeeStatus"
    //     type="text"
    //     // defaultValue={employee.status}
    //     readOnly={isActive}
    //   />
    //   <FaRegTrashAlt
    //     className="deleteButton"
    //     // onClick={() => onDelete(employee.id)}
    //   />
    //   {saveVisible ? (
    //     <></>
    //   ) : (
    //     <GrEdit id={employee.id} onClick={(e) => editData(e)} />
    //   )}

    //   {saveVisible ? (
    //     <FaRegSave id={employee.id} onClick={(e) => save(e)} />
    //   ) : (
    //     <></>
    //   )}
    // </div>
  );
};

export default Employee;
