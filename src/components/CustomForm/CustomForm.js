import React from "react";
import "./CustomForm.css";

const CustomForm = () => {
  return (
    <form className="custom-form">
      <div className="input-section mt-5">
        <input type="text" name="name" required autoComplete="off" />
        <label htmlFor="name" className="label-name">
          <span className="content-name">Name</span>
        </label>
      </div>
      <div className="input-section mt-5">
        <input type="text" name="email" required autoComplete="off" />
        <label htmlFor="email" className="label-name">
          <span className="content-name">Email</span>
        </label>
      </div>
      <button
        type="submit"
        className="py-2 px-3 my-5 text-light text-uppercase submit-button"
      >
        Send Message
      </button>
    </form>
  );
};

export default CustomForm;
