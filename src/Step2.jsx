import React, { useState } from 'react';
import './App.css';

const Step2 = ({ nextStep, prevStep, handleChange, values, currentStep }) => {
  const [errors, setErrors] = useState({});

  const indianCuisines = [
    'North Indian',
    'South Indian',
    'Punjabi',
    'Gujarati',
    'Bengali',
    'Rajasthani',
  ];

  const handleSubmit = () => {
    const { speciality } = values;
    let validationErrors = {};

    if (!speciality) {
      validationErrors.speciality = "Please select a Cuisine";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      nextStep();
    }
  };

  return (
    <div className={`step ${currentStep ? 'current' : ''}`}>
      <h1>Register - Step 2</h1>
      <label htmlFor="speciality">Speciality of Cuisine:</label>
      <select
        id="speciality"
        value={values.speciality}
        onChange={handleChange('speciality')}
      >
        <option value="">Select a Cuisine</option>
        {indianCuisines.map((cuisine, index) => (
          <option key={index} value={cuisine}>
            {cuisine}
          </option>
        ))}
      </select>
      {errors.speciality && <div className="error">{errors.speciality}</div>}
      <br></br>
      <button onClick={prevStep}>Previous</button>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default Step2;

