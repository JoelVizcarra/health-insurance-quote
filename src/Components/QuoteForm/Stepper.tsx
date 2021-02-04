import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Result from './Result';

type props = {
  currentStep: number;
  stepsNumber: number;
  setInitialValues: React.Dispatch<React.SetStateAction<QuoteFormDataType>>;
};

const Stepper = ({
  currentStep,
  stepsNumber,
  setInitialValues,
  ...rest
}: props) => {
  switch (currentStep) {
    case 1:
      return <Step1 {...rest} />;
    case 2:
      return <Step2 {...rest} setInitialValues={setInitialValues} />;
    case 3:
      return <Step3 {...rest} />;
    case stepsNumber:
      return <Result {...rest} />;
    default:
      return null;
  }
};
export default Stepper;
