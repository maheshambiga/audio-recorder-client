import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router';

const validate = ({
                    email, password,
                  }) => {
  const errors = {};

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

const CustomLogin = ({handleSubmit, valid, submitting, result, authenticateUser}) => {
  const onToggleViewHandler = () => {
    toggleViewCallback('signup');
  };
  return (
    <div>
      <form className="clearfix">

        <div className="col-lg-12 noSidePad margin24 onlyBottomMargin">

          <Field
            name="email"
            component={renderField}
            type="text"
            placeholder="Email"
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

        {typeof result.success !== typeof undefined && result.success === false &&
        <p className="text-center">{result.message}</p>}

        <button
          type="button"
          className="btn btn-lg btn-success width-100"
          disabled={!valid || submitting}
          onClick={
            handleSubmit(data => {
              authenticateUser(Object.assign({}, data, {type:0}));
            })}
        >
          Sign In
        </button>


      </form>
      <Link to="/register"
         className="fontWeightBold margin12 noSideMargin block">Register now</Link>
    </div>
  );
};

export default reduxForm({
  form: 'LoginForm',
  validate,
})(CustomLogin);