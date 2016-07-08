import React, { Component, PropTypes } from 'react';

class StepTwo extends Component {

  next(e) {
    e.preventDefault();
    this.props.nextStep();
  }

  previous(e) {
    e.preventDefault();
    this.props.previousStep();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
            <h2 className="page-header">Step {this.props.step}</h2>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" className="form-control" ref="first_name"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" className="form-control" ref="last_name"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" ref="password"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="retype_password">Retype Password</label>
                    <input type="password" className="form-control" ref="retype_password"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button type="submit" onClick={e => this.next(e)} className="btn btn-primary pull-right">
                    Continue
                  </button>
                  <button type="submit" onClick={e => this.previous(e)} className="btn btn-default">
                    Back
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

StepTwo.proptypes = {
  step: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
}

export default StepTwo;
