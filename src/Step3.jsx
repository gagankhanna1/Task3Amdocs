import React from 'react';

const Step3 = ({ values, currentStep }) => (
  <div className={`step ${currentStep ? 'current' : ''}`}>
    <h1>Registration Complete</h1>
    <p>Name: {values.name}</p>
    <p>Email: {values.email}</p>
    <p>Date of Birth: {values.dateOfBirth}</p>
    <p>Speciality of Cuisine: {values.speciality}</p>
  </div>
);

export default Step3;
