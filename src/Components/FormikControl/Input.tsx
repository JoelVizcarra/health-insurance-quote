import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

type Props = {
  [x: string]: any;
};

const Input = ({ label, name, ...rest }: Props) => {
  return (
    <div className="form-control">
      <label
        className="form-control__label form-control__label--floating"
        htmlFor={name}
      >
        {label}
      </label>
      <Field name={name}>
        {({ form: { touched, errors }, field }: any) => {
          return (
            <input
              {...field}
              className={`form-control__input ${
                errors[name] && touched[name] && 'form-control__input--invalid'
              }`}
              id={name}
              name={name}
            />
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};
export default Input;
