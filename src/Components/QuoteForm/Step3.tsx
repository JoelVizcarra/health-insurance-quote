import * as Yup from 'yup';

import PlanSelector from './PlanSelector';

export const Step3Schema = Yup.object().shape({});

const Step3 = () => {
  return (
    <div>
      <PlanSelector />
      <button className="button button--primary" type="submit">
        comprar plan
      </button>
    </div>
  );
};
export default Step3;
