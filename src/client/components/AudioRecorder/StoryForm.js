import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = ({
                    storyName, genre,
                  }) => {
  const errors = {};

  if (!genre) {
    errors.genre = 'Required.';
  } else if (genre === 'select') {
    errors.genre = 'Select a genre.';
  }

  if (!storyName) {
    errors.storyName = 'Required.';
  }

  return errors;
};

const renderField = field =>
  <div className="input-row inputBoxShadow">
    <input {...field.input} placeholder={field.placeholder}
           className="block width-100 color_000" type="text"/>
    {field.meta.touched &&
    field.meta.error &&
    <span className="text-danger">
        {field.meta.error}
      </span>}
  </div>;

const StoryForm = ({handleSubmit, valid, submitting, storySubmitHandler, onCancel}) => {
  const onToggleViewHandler = () => {
    toggleViewCallback('signup');
  };
  return (
    <div>
      <form className="clearfix">
        <div className="row">
          <div
            className="col-lg-12 colo-xs-12 noSidePad margin6 onlyBottomMargin">

            <Field
              name="storyName"
              component={renderField}
              type="text"
              placeholder="Story Name"
              className="form-control"
            />
          </div>
          <div className="col-lg-12 colo-xs-12 noSidePad">
            <div className="custom-dropdown width-100">
              <Field
                name="genre"
                component="select"
                type="select"
                className="form-control">
                <option value='select'>Story Genre</option>
                <option value='Adventure'>Adventure</option>
                <option value='Bedtime'>Bedtime</option>
                <option value='Comedy'>Comedy</option>
                <option value='Drama'>Drama</option>
                <option value='Horror'>Horor</option>
                <option value='Romance'>Romance</option>
                <option value='Inspirational'>Inspirational</option>
                <option value='Fantasy'>Fantasy</option>
                <option value='Self-help'>Self-help</option>
              </Field>
            </div>

          </div>
        </div>


        <div className="row margin24 onlyTopMargin">
          <div className="col-xs-12 col-lg-6 noSidePad">
            <button
              type="button"
              className="button secondary m-fullWidth"
              disabled={!valid || submitting}
              onClick={
                handleSubmit(data => {
                  storySubmitHandler(Object.assign({}, data));
                })}
            >
              Add Story
            </button>
          </div>
          <div className="col-xs-12 col-lg-6 noSidePad">
            <button className="button secondary m-fullWidth" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>


      </form>

    </div>
  );
};

export default reduxForm({
  form: 'StoryForm',
  validate,
})(StoryForm);