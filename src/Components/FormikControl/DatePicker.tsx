import React from 'react';
import DateView from 'react-datepicker';
import { Field, ErrorMessage } from 'formik';

import TextError from './TextError';

import 'react-datepicker/dist/react-datepicker.css';

function DatePicker(props: any) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label
        className="form-control__label form-control__label--floating"
        htmlFor={name}
      >
        {label}
      </label>
      <Field name={name}>
        {({ form, field }: any) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              className={`form-control__input ${
                form.errors[name] &&
                form.touched[name] &&
                'form-control__input--invalid'
              }`}
              autoComplete="off"
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default DatePicker;
