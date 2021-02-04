import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const Select = (props: any) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <Field>
        {({ form, field }: any) => (
          <select
            className={`form-control__select ${
              form.errors[name] &&
              form.touched[name] &&
              'form-control__input--invalid'
            }`}
            id={name}
            name={name}
            {...rest}
            {...field}
          >
            {options.map((option: KeyValue) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.key}
                </option>
              );
            })}
          </select>
        )}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};
export default Select;
