import React from 'react';

import Input from './Input';
import Select from './Select';
import RadioButtons from './RadioButtons';
import DatePicker from './DatePicker';
import Checkbox from './Checkbox';

enum CONTROL_TYPES {
  INPUT = 'input',
  SELECT = 'select',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  DATE = 'date',
}

type Props = {
  control: string;
  [x: string]: any;
};

const FormikControl: React.FC<Props> = ({ control, ...rest }) => {
  switch (control) {
    case CONTROL_TYPES.INPUT:
      return <Input {...rest} />;
    case CONTROL_TYPES.SELECT:
      return <Select {...rest} />;
    case CONTROL_TYPES.RADIO:
      return <RadioButtons {...rest} />;
    case CONTROL_TYPES.CHECKBOX:
      return <Checkbox {...rest} />;
    case CONTROL_TYPES.DATE:
      return <DatePicker {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
