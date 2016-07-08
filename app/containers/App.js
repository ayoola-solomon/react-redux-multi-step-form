import React, { Component } from 'react';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';
import StepFour from '../components/StepFour';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }

  nextStep() {
    this.setState({
      step : this.state.step + 1
    });
  }

  previousStep() {
    this.setState({
      step : this.state.step - 1
    });
  }

  createAccount() {
    toastr.info('Yay');
  }

  showStep() {
    let { step } = this.state;
    switch (step) {
      case 1:
        return <StepOne step={step}
          nextStep={this.nextStep.bind(this)} />
      case 2:
        return <StepTwo step={step}
          nextStep={this.nextStep.bind(this)}
          previousStep={this.previousStep.bind(this)} />
      case 3:
        return <StepThree step={step}
          nextStep={this.nextStep.bind(this)}
          previousStep={this.previousStep.bind(this)} />
      case 4:
        return <StepFour step={step}
          nextStep={this.createAccount.bind(this)}
          previousStep={this.previousStep.bind(this)} />
    }
  }

  render() {
    var style = {
      width : (this.state.step / 4 * 100) + '%'
    };

    const { step } = this.state;
    return (
      <main className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <span className="progress-step">Step {step}</span>
                <progress className="progress" style={style}></progress>
              </div>
            </div>
            { this.showStep() }
          </div>
        </div>
      </main>
    );
  }
}

export default App;
