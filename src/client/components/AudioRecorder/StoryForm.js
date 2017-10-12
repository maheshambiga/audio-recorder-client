import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = ({
                    storyName, genre,
                  }) => {
  const errors = {};

  if (!genre) {
    errors.genre = 'Required.';
  }

  if (!storyName) {
    errors.storyName = 'Required.';
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

const StoryForm = ({handleSubmit, valid, submitting, storySubmitHandler}) => {
  const onToggleViewHandler = () => {
    toggleViewCallback('signup');
  };
  return (
    <div className="row">
      <form className="clearfix">

        <div className="col-lg-2 noSidePad">
          <label>Story Name</label>
          <Field
            name="storyName"
            component={renderField}
            type="text"
            placeholder="Name"
            className="form-control"
          />
        </div>
        <div className="col-lg-2 noSidePad margin24 onlyLeftMargin">
          <label>Story Genre</label>
          <Field
            name="genre"
            component="select"
            type="select"
            className="form-control">
            <option />
            <option value='comedy'>Comedy</option>
            <option value='drama'>Drama</option>
            <option value='horror fiction'>Horror fiction</option>
            <option value='romance'>Romance</option>
            <option value='tragedy'>Tragedy</option>
            <option value='fantasy'>Fantasy</option>
            <option value='mythology'>Mythology</option>
          </Field>

        </div>

        <div className="col-lg-2 noSidePad margin24 onlyLeftMargin">
          <button
            type="button"
            className="btn btn-success margin24 onlyTopMargin"
            disabled={!valid || submitting}
            onClick={
              handleSubmit(data => {
                storySubmitHandler(Object.assign({}, data));
              })}
          >
            Add Story
          </button>
        </div>


      </form>

    </div>
  );
};

export default reduxForm({
  form: 'StoryForm',
  validate,
})(StoryForm);