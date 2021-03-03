import { React, useState } from "react";
import PropTypes from "prop-types";
import { FaRegTrashAlt, FaRegSave } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";

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
  const [isActive, setReadOnly] = useState(true);
  const [saveVisible, setSaveVisible] = useState(false);

  const editData = (e) => {
    const id = e.target.getAttribute("id");
    setReadOnly(!isActive);
    setSaveVisible(!saveVisible);
    console.log("Edit...", id);
  };

  const save = (e) => {
    const id = e.target.getAttribute("id");
    setSaveVisible(!saveVisible);
    console.log("Save...", id);
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
        defaultValue={empId}
        readOnly
      />
      <input
        className="tableCollumn"
        id="employeeName"
        type="text"
        defaultValue={name}
        readOnly={isActive}
      />
      <input
        className="tableCollumn"
        id="employeeLastName"
        type="text"
        defaultValue={lastName}
        readOnly={isActive}
      />
      <input
        className="tableCollumn"
        id="employeeEmail"
        type="text"
        defaultValue={email}
        readOnly={isActive}
      />

      <input
        className="tableCollumn"
        id="employeeStatus"
        type="text"
        defaultValue={status}
        readOnly={isActive}
      />
      <FaRegTrashAlt className="deleteButton" onClick={() => onDelete(empId)} />
      {saveVisible ? null : <GrEdit id={empId} onClick={(e) => editData(e)} />}

      {saveVisible ? <FaRegSave id={empId} onClick={(e) => save(e)} /> : <></>}
    </div>
  );
};

export default Employee;
