import React, { Component } from 'react';
import './App.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

class App extends Component {
  state = {
    step: 1,
    name: '',
    email: '',
    dateOfBirth: '',
    speciality: '',
    completedSteps: [],
  };

  nextStep = () => {
    const { step, completedSteps } = this.state;
    this.setState({
      step: step + 1,
      completedSteps: [...completedSteps, step],
    });
  };

  prevStep = () => {
    const { step, completedSteps } = this.state;
    this.setState({ step: step - 1 });

    const updatedCompletedSteps = [...completedSteps];
    updatedCompletedSteps.pop();
    this.setState({ completedSteps: updatedCompletedSteps });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step, name, email, dateOfBirth, speciality, completedSteps } = this.state;
    const values = { name, email, dateOfBirth, speciality };

    return (
      <div className="form-horizontal">
        <div className={`step-container ${step === 3 ? 'vertical' : 'horizontal'}`}>
          <div className="steps-indicator">
            {completedSteps.map((completedStep) => (
              <div key={completedStep} className="completed-step">
                Step {completedStep}
              </div>
            ))}
            {step !== 1 && step !== 2 && (
              <div className="current-step">
                Step {step}
              </div>
            )}
          </div>
          <div className={`step ${step === 1 ? 'current' : ''}`}>
            <Step1
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
              currentStep={step === 1}
            />
          </div>
          <div className={`step ${step === 2 ? 'current' : ''}`}>
            <Step2
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
              currentStep={step === 2}
            />
          </div>
          <div className={`step ${step === 3 ? 'current' : ''}`}>
            <Step3 values={values} currentStep={step === 3} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
