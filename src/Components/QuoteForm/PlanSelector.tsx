import React from 'react';
import DateView from 'react-datepicker';
import { Field, ErrorMessage } from 'formik';
import TextError from './../FormikControl/TextError';
import 'react-datepicker/dist/react-datepicker.css';

type insurancePlanType = {
  name: string;
  currencySymbol: string;
  amount: number;
  time: string;
};

// should be requested by API
const insurancePlans: insurancePlanType[] = [
  { name: 'basico', currencySymbol: 'S/.', amount: 160, time: 'mensual' },
  { name: 'avanzado', currencySymbol: 'S/.', amount: 200, time: 'mensual' },
  { name: 'premium', currencySymbol: 'S/.', amount: 250, time: 'mensual' },
  { name: 'full', currencySymbol: 'S/.', amount: 500, time: 'mensual' },
];

function PlanSelector() {
  return (
    <div className="plan-selector">
      {insurancePlans.map(
        ({ name, currencySymbol, amount, time }: insurancePlanType) => (
          <div className="plan-selector__item">
            <p className="plan-selector__name">{name}</p>
            <p className="plan-selector__price">
              <span className="plan-selector__price__currency-symbol">
                {currencySymbol}
              </span>
              <span className="plan-selector__price__number">{amount}</span>
            </p>
            <p className="plan-selector__time">{time}</p>
          </div>
        )
      )}
    </div>
  );
}

export default PlanSelector;
