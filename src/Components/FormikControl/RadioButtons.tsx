import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const RadioButtons = ({ label, name, options, ...rest }: any) => (
  <div className="form-control">
    <label>{label}</label>
    <Field name={name}>
      {({ field }: any) => {
        return options.map((option: KeyValue) => {
          return (
            <div className="form-control" key={option.key}>
              <input
                type="radio"
                className="form-control__radio"
                id={option.value}
                {...field}
                {...rest}
                value={option.value}
                checked={field.value === option.value}
              />
              <label className="form-control__label" htmlFor={option.value}>
                {option.key}
              </label>
            </div>
          );
        });
      }}
    </Field>
    <ErrorMessage component={TextError} name={name} />
  </div>
);

export default RadioButtons;
