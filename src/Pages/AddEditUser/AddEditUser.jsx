import React, { useState } from "react";
import "./AddEditUser.css";

const initialState = {
  name: "",
  email: "",
  info: "",
  contact: "",
};

const AddEditUser = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState(initialState);
  const { name, email, info, contact } = data;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const validate = () => {
    let errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!info) {
      errors.info = "Info is required";
    }
    if (!contact) {
      errors.contact = "Contact is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);
  };
 
  return (
    <div className="addEditUser">
      <div className="form-container">
        {isSubmit ? (
          <div className="loading">Loading...</div>
        ) : (
          <form className="add-user-form">
            <div className="heading">Add User</div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name..."
              onChange={handleChange}
              value={name}
              autoFocus
            />
            {errors.name ? <div className="error-div">{errors.name}</div> : null}
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              value={email}
              placeholder="Enter Your Email..."
            />
            {errors.email ? <div className="error-div">{errors.email}</div> : null}
            <label htmlFor="text1">Info</label>
            <textarea
              name="text1"
              id="text1"
              onChange={handleChange}
              placeholder="Enter Your Info..."
              value={info}
            ></textarea>
            {errors.info ? <div className="error-div">{errors.info}</div> : null}
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              name="contact"
              id="contact"
              onChange={handleChange}
              value={contact}
              placeholder="Enter Your Contact..."
            />
            {errors.contact ? <div className="error-div">{errors.contact}</div> : null}
            <label htmlFor="file1">Upload</label>
            <input
              type="file"
              name="file1"
              id="file1"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button className="submit-btn" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddEditUser;
