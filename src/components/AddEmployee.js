import React from "react";
import Employee from "./model/Employee";

const AddEmployee = () => {
  const enabled = false;

  const enable = () => {
    this.enabled = !this.enabled;
  };
  return (
    <form className="add-form">
      <div className="form-control">
        <Employee
          name="name"
          lastName="last name"
          status="status"
          email="email"
          isReadOnly="false"
        />
      </div>
    </form>
  );
};

export default AddEmployee;
