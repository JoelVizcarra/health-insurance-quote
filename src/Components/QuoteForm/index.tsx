import React, { useState } from 'react';
import { Form, Formik } from 'formik';

import Stepper from './Stepper';
import { Step1Schema } from './Step1';
import { Step2Schema } from './Step2';
import { Step3Schema } from './Step3';

const STEPS_NUMBER = 4;

const initialFormValues: QuoteFormDataType = {
  documentType: 'dni',
  documentNumber: '',
  birthdate: '',
  phoneNumber: '',
  firstName: '',
  paternalLastName: '',
  maternalLastName: '',
  gender: '',
  insuranceClient: '',
  dataProteccionTerms: false,
  commercialCommunication: false,
  plan: '',
};

const QuoteForm = () => {
  const [currentStep, setCurrentStep] = useState(3);
  const [initialValues, setInitialValues] = useState(initialFormValues);

  const handleSubmit = (values: QuoteFormDataType) => {
    console.log(values);
    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
  };

  const reset = (resetForm: any) => {
    setCurrentStep(1);
    resetForm();
  };

  const getValidationSchema = () => {
    switch (currentStep) {
      case 1:
        return Step1Schema;
      case 2:
        return Step2Schema;
      case 3:
        return Step3Schema;
      default:
        return {};
    }
  };

  return (
    <div className="container">
      <p>
        PASO {currentStep} DE {STEPS_NUMBER}
      </p>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={getValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleReset }) => (
          <Form>
            <Stepper
              currentStep={currentStep}
              stepsNumber={STEPS_NUMBER}
              resetForm={() => reset(handleReset)}
              setInitialValues={setInitialValues}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default QuoteForm;
