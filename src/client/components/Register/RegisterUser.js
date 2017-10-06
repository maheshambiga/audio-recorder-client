import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router';

const validate = ({
                    firstName,
                    lastName,
                    email,
                    password,
                  }) => {
  const errors = {};
  if (!firstName || !firstName.trim().length) {
    errors.firstName = 'Required';
  }
  if (!lastName || !lastName.trim().length) {
    errors.lastName = 'Required';
  }

  if (!email) {
    errors.email = 'Required';
  } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email)) {
    errors.email = 'Invalid email';
  }
  if (!password) {
    errors.password = 'Required.';
  }

  return errors;
};

const renderField = field =>
  <div className="input-row">
    <input {...field.input} placeholder={field.placeholder}
           className="form-control" type="text"/>
    {field.meta.touched &&
    field.meta.error &&
    <span className="text-danger">
        {field.meta.error}
      </span>}
  </div>;

const RegisterUser = ({handleSubmit, valid, submitting, registerNewUser}) => {
  const onToggleViewHandler = () => {
    toggleViewCallback('signin');
  };
  return (
    <div>
      <form>

          <div className="col-lg-12 noSidePad margin24 onlyBottomMargin">

            <Field
              name="firstName"
              component={renderField}
              type="text"
              placeholder="First Name"
              className="form-control"
            />
          </div>
          <div className="col-lg-12 noSidePad margin24 onlyBottomMargin">
            <Field
              name="lastName"
              component={renderField}
              type="text"
              placeholder="Last Name"
              className="form-control"
            />
          </div>
          <div className="col-lg-12 noSidePad margin24 onlyBottomMargin">

            <Field
              name="email"
              component={renderField}
              type="text"
              placeholder="Your Email"
              className="form-control"
            />
          </div>
          <div className="col-lg-12 noSidePad margin24 onlyBottomMargin ">

            <Field
              name="password"
              component={renderField}
              type="text"
              placeholder="New Password"
              className="form-control"
            />
          </div>

          <button
            type="button"
            className="btn btn-lg btn-success width-100"
            disabled={!valid || submitting}
            onClick={
              handleSubmit(data => {

                registerNewUser(data);
              })}
          >
            Sign Up
          </button>


      </form>

      <Link to="/login"
            className="fontWeightBold margin12 noSideMargin block">Back to Sign in</Link>
    </div>
  );
};

export default reduxForm({
  form: 'RegisterUser',
  validate,
})(RegisterUser);