import React, { useState } from 'react';
import './App.css';

const Step1 = ({ nextStep, handleChange, values, currentStep }) => {
  // Define the 'errors' state to store validation errors
  const [errors, setErrors] = useState({});

  // Validation function for email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validation function for age (at least 18 years old)
  const validateAge = (dateOfBirth) => {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 18;
  };

  // Validation function for name (no numbers or special characters)
  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
  };

  // Function to handle form submission and validation
  const handleSubmit = () => {
    const { name, email, dateOfBirth } = values;
    let validationErrors = {};

    if (!name) {
      validationErrors.name = "Name is required";
    } else if (!validateName(name)) {
      validationErrors.name = "Name should only contain letters and spaces";
    }

    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!dateOfBirth) {
      validationErrors.dateOfBirth = "Date of Birth is required";
    } else if (!validateAge(dateOfBirth)) {
      validationErrors.dateOfBirth = "Minimum Age is 18 years";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      nextStep();
    }
  };

  return (
    <div class="forms" className={`step ${currentStep ? 'current' : ''}`}>
      <h1>Register - Step 1</h1>
      <input
        type="text"
        placeholder="Name"
        value={values.name}
        onChange={handleChange('name')}
      />
      <div className="error-container">
      {errors.name && <div className="error">{errors.name}</div>}
      </div>
      <br></br>
      <input
        type="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange('email')}
      />
      <div className="error-container">
      {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <br></br>
      <input
        type="date"
        placeholder="Date of Birth"
        value={values.dateOfBirth}
        onChange={handleChange('dateOfBirth')}
      />
      <div className="error-container">
      {errors.dateOfBirth && <div className="error">{errors.dateOfBirth}</div>}
      </div>
      <br></br>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default Step1;
