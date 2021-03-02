import { React, useState } from "react";
import PropTypes from "prop-types";
import { FaRegTrashAlt } from "react-icons/fa";

const Employee = ({
  empId,
  name,
  lastName,
  status,
  email,
  color,
  onDelete,
  isReadOnly,
}) => {
  const [isActive, setReadOnly] = useState("false");

  const getId = (e) => {
    const id = e.target.getAttribute("id");
    console.log(id);
    return id;
  };

  return (
    <div
      id={empId}
      className="employeeComponent"
      style={{ backgroundColor: color }}
    >
      <input
        className="tableCollumn"
        id="employeeId"
        type="text"
        value={empId}
      />
      <input
        className="tableCollumn"
        id="employeeName"
        type="text"
        value={name}
      />
      <input
        className="tableCollumn"
        id="employeeLastName"
        type="text"
        value={lastName}
      />
      <input
        className="tableCollumn"
        id="employeeEmail"
        type="text"
        value={email}
      />

      <input
        className="tableCollumn"
        id="employeeStatus"
        type="text"
        value={status}
      />
      <FaRegTrashAlt className="deleteButton" onClick={() => onDelete(empId)} />
      <button id={empId} onClick={(e) => setReadOnly(getId(e))}>
        Activate
      </button>
      <h2>{isActive}</h2>
    </div>
  );
};

export default Employee;
