import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function Checkbox(props: any) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <Field name={name}>
        {({ field }: any) => (
          <div>
            <input
              className="form-control__checkbox"
              type="checkbox"
              id={name}
              {...field}
              {...rest}
              value={name}
              checked={field.value}
            />
            <label htmlFor={name}>{label}</label>
          </div>
        )}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Checkbox;
