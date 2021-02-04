import FormikControl from './../FormikControl';
import * as Yup from 'yup';

export const Step1Schema = Yup.object().shape({
  documentType: Yup.string().required('El tipo de documento es obligatiorio.'),
  documentNumber: Yup.string().required(
    'El número de documento es obligatiorio.'
  ),
  birthdate: Yup.date().required('La fecha de nacimiento es obligatioria.'),
  phoneNumber: Yup.number().required('El celular es obligatiorio.'),
});

const Step1 = () => {
  return (
    <div>
      <div className="form-combo">
        <FormikControl
          control="select"
          label="Tipo de documento"
          name="documentType"
          options={[{ key: 'DNI', value: 'dni' }]}
        />
        <FormikControl
          control="input"
          type="text"
          label="Numero de documento"
          name="documentNumber"
        />
      </div>
      <FormikControl
        control="date"
        label="Fecha de naciemiento"
        name="birthdate"
      />
      <FormikControl
        control="input"
        type="phone"
        label="Celular"
        name="phoneNumber"
      />
      <FormikControl
        control="checkbox"
        label="Acepto la Política de Protección de Datos Personales y los Términos y Condiciones"
        name="dataProteccionTerms"
      />
      <FormikControl
        control="checkbox"
        label="Acepto la Política de envío de Comunicaciones Comerciales"
        name="commercialCommunication"
      />
      <button className="button button--primary" type="submit">
        comencemos
      </button>
    </div>
  );
};
export default Step1;
