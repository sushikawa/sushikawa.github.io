import React, { Component } from 'react';
import Joi from 'joi-browser';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import $ from 'jquery';

import Businesshours from './contact/Businesshours';
import Storeinfo from './contact/Storeinfo';
import Googlemap from './contact/Googlemap';

import ContextTypes from '../ContextTypes';

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      fields: {
        firstname: '',
        lastname: '',
        email: '',
        message: ''
      },
      isVerified: false,
      displayRecaptError: false,
      errors: {},
      sent: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onRecaptchaChange = this.onRecaptchaChange.bind(this);
    this.recaptchaRef = React.createRef();
  }
  static contextType = ContextTypes;
  componentDidMount() {
    $('.master').animate({ scrollTop: 0 }, 0);
    this.context.menuLinkDisabled = false;
  }
  schema = {
    firstname: Joi.string()
      .alphanum()
      // .regex(/^[A-Za-z0-9]+( [A-Za-z0-9]+)=?$/)
      .min(2)
      .max(40)
      .required()
      .label('First Name'),
    lastname: Joi.string()
      .alphanum()
      // .regex(/^[A-Za-z0-9]+( [A-Za-z0-9]+)=?$/)
      .min(2)
      .max(40)
      .required()
      .label('Last Name'),
    email: Joi.string()
      .email()
      .required()
      .label('Email'),
    message: Joi.string()
      .required()
      .label('Message')
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.isVerified) this.setState({ displayRecaptError: true });

    const errors = this.validate();

    this.setState({ errors: errors || {} });

    if (
      (errors && !this.state.isVerified) ||
      (errors && this.state.isVerified) ||
      (!errors && !this.state.isVerified)
    ) {
      return;
    } else {
      const { firstname, lastname, email, message } = this.state.fields;
      axios
        .post('https://sushikawa.ca/api/post/send', {
          firstname,
          lastname,
          email,
          message
        })
        .then(result => this.setState({ sent: result.data }))
        .then(final => this.resetForm());
    }
  };

  resetForm = () => {
    this.setState({
      fields: { firstname: '', lastname: '', email: '', message: '' },
      errors: {},
      isVerified: false,
      displayRecaptError: false
    });
    this.recaptchaRef.current.reset();
    // even though this will return true, will make master component rerender
    this.props.renderMaster(false);
    setTimeout(() => {
      this.setState({
        sent: ''
      });
    }, 5000);
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const fields = { ...this.state.fields };
    fields[input.name] = input.value;

    this.setState({ fields, errors });
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.fields, this.schema, options);
    if (!error) return null;

    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema, { abortEarly: false });

    return error ? error.details[0].message : null;
  };

  onRecaptchaChange = response => {
    if (response) {
      this.setState({ displayRecaptError: false });
      this.setState({ isVerified: true });
    }
  };
  handleLocationClick = () => {
    window.open(
      'https://www.google.com/maps/place/3107+32+St,+Vernon,+BC+V1T+5M6/@50.2648035,-119.2757326,17z/data=!3m1!4b1!4m5!3m4!1s0x537dd8c28e2978b5:0x872804e01a1b0f2b!8m2!3d50.2648001!4d-119.2735439',
      '_blank'
    );
  };

  render() {
    return (
      <React.Fragment>
        <header className="contact-header">
          {/* <div>
            <p>Come quench your sushi craving at Sushi Kawa</p>
          </div> */}
        </header>

        <div className="contacts">
          <div className="kawa-container contact-box">
            <div className="row">
              <div className="col-md-6 businesshours-box">
                <Businesshours />
              </div>
              <div className="line" />
              <div className="address-box col-md-6">
                <Storeinfo />
              </div>
            </div>
          </div>
        </div>
        <div className="kawa-container">
          <div className="google-map-container">
            <div className="heading">
              <button
                href="https://www.google.com/maps/place/3107+32+St,+Vernon,+BC+V1T+5M6/@50.2648035,-119.2757326,17z/data=!3m1!4b1!4m5!3m4!1s0x537dd8c28e2978b5:0x872804e01a1b0f2b!8m2!3d50.2648001!4d-119.2735439"
                target="location"
                className="view-larger-map"
                onClick={this.handleLocationClick}
                title="Click to open google map"
              >
                View larger map
              </button>
            </div>
            <div className="google-map-box">
              <Googlemap />
            </div>
          </div>
        </div>
        <div className="contact-container">
          <div className="kawa-container">
            <div className="contact-form-box">{this.renderForm()}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  renderForm = () => {
    const { fields, errors, sent, displayRecaptError } = this.state;
    return (
      <React.Fragment>
        <h5>
          Please feel welcome to message us at any time regarding any questions
          you may have.
        </h5>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              {/* <label htmlFor="input-firstname" className="input-firstname">
                First name:
              </label> */}
              <input
                type="text"
                className="form-control"
                id="input-firstname"
                name="firstname"
                placeholder="First Name*"
                value={fields.firstname}
                onChange={this.handleChange}
              />
              {errors.firstname && (
                <div className="alert alert-danger mt-1">
                  {errors.firstname}
                </div>
              )}
            </div>
            <div className="form-group col-md-6">
              {/* <label htmlFor="input-lastname" className="input-lastname">
                Last name:
              </label> */}
              <input
                type="text"
                className="form-control"
                id="input-lastname"
                name="lastname"
                placeholder="Last Name*"
                value={fields.lastname}
                onChange={this.handleChange}
              />
              {errors.lastname && (
                <div className="alert alert-danger mt-1">{errors.lastname}</div>
              )}
            </div>
            <div className="form-group col-md-12">
              {/* <label htmlFor="input-email">Email:</label> */}
              <input
                type="text"
                className="form-control"
                id="input-email"
                name="email"
                placeholder="Email*"
                value={fields.email}
                onChange={this.handleChange}
              />
              {errors.email && (
                <div className="alert alert-danger mt-1">{errors.email}</div>
              )}
            </div>
          </div>

          <div className="form-group">
            {/* <label htmlFor="input-message">Message:</label> */}
            <textarea
              id="input-message"
              cols="30"
              rows="5"
              className="form-control"
              name="message"
              value={fields.message}
              placeholder="Message*"
              onChange={this.handleChange}
            />
            {errors.message && (
              <div className="alert alert-danger mt-1">{errors.message}</div>
            )}
          </div>

          {/* <div className="col-md-12"> */}
          {/* <Recaptcha
              sitekey="6LfppoQUAAAAAOLjidJ030t-YCG7H9D_yCX8kSjT"
              render="explicit"
              onloadCallback={this.recaptchaLoaded}
              verifyCallback={this.verifyCallback}
            /> */}
          <ReCAPTCHA
            ref={this.recaptchaRef}
            sitekey="6LfppoQUAAAAAOLjidJ030t-YCG7H9D_yCX8kSjT"
            onChange={this.onRecaptchaChange}
          />

          {displayRecaptError && (
            <div className="alert alert-danger mt-1">
              Please check the ' I'm not a robot ' box.
            </div>
          )}
          {/* </div> */}
          <div className="col-md-12">
            {sent !== '' && sent === 'success' && this.renderSuccess()}
            {sent !== '' && sent === 'fail' && this.renderFail()}
          </div>
          <button type="submit" className="btn mt-1 submit-button">
            SEND MESSAGE
          </button>
        </form>
      </React.Fragment>
    );
  };

  renderSuccess = () => {
    return (
      <div className="alert alert-success mt-1">Message has been Sent.</div>
    );
  };

  renderFail = () => {
    return (
      <div className="alert alert-danger mt-1">Message has not been sent.</div>
    );
  };
}

export default Contact;
