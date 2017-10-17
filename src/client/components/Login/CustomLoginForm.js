import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';

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
  <div className="input-row inputBoxShadow">
    <input {...field.input} placeholder={field.placeholder} type={field.type}
           className="block width-100" />
    {field.meta.touched &&
    field.meta.error &&
    <span className="color_959595">
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
            type="password"
            placeholder="Password"
            className="form-control"
          />
        </div>

        {typeof result.success !== typeof undefined &&
        result.success === false &&
        <div className="col-lg-12 noSidePad">
          <p className="color_red">{result.message}</p>
        </div>}
        <div className="row">
          <div className="col-xs-6">
            <button
              type="button"
              className="button primary large"
              disabled={!valid || submitting}
              onClick={
                handleSubmit(data => {
                  authenticateUser(Object.assign({}, data, {type: 0}));
                })}
            >
              Sign In
            </button>

          </div>
          <div className="col-xs-6">
            <Link to="/register"
                  className="fontWeightBold margin12 noSideMargin block textUnderline color_FFF">Register
              now</Link>
          </div>

        </div>


      </form>

    </div>
  );
};

export default reduxForm({
  form: 'LoginForm',
  validate,
})(CustomLogin);