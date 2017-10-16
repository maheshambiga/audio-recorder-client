import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';

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
  <div className="input-row inputBoxShadow">
    <input {...field.input} placeholder={field.placeholder}
           className="block width-100" type="text"/>
    {field.meta.touched &&
    field.meta.error &&
    <span className="color_959595">
        {field.meta.error}
      </span>}
  </div>;

const RegisterUser = ({handleSubmit, valid, submitting, registerNewUser, result}) => {
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
            placeholder="Password"
            className="form-control"
          />
        </div>

        {typeof result.success !== typeof undefined &&
        <p className="color_959595">{result.message}</p>}
        <div className="row">


          <div className="col-xs-6">
            <button
              type="button"
              className="button large primary"
              disabled={!valid || submitting}
              onClick={
                handleSubmit(data => {

                  registerNewUser(data);
                })}
            >
              Sign Up
            </button>
          </div>
          <div className="col-xs-6">

            <Link to="/login" className="fontWeightBold margin12 noSideMargin block textUnderline color_FFF">Back
            to Sign in</Link></div>
        </div>


      </form>


    </div>
  );
};

export default reduxForm({
  form: 'RegisterUser',
  validate,
})(RegisterUser);