import FormikControl from './../FormikControl';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';

import { fetchRandomUser, UserSate } from './../../api/user';

export const Step2Schema = Yup.object().shape({
  documentType: Yup.string().required('El tipo de documento es obligatiorio.'),
  documentNumber: Yup.string().required(
    'El número de documento es obligatiorio.'
  ),
  birthdate: Yup.date().required('La fecha de nacimiento es obligatioria.'),
  firstName: Yup.string().required('Los nombres son obligatorios'),
  paternalLastName: Yup.string().required('El apellido paterno es obligatorio'),
  maternalLastName: Yup.string().required('El apellido materno es obligatorio'),
  gender: Yup.string().required('El genero es obligatorio'),
  insuranceClient: Yup.string().required('Este campo es obligatorio'),
});

const genderOptions = [
  { key: 'Femenino', value: 'female' },
  { key: 'Masculino', value: 'male' },
];

const insuranceClientOptions = [
  { key: 'Solo a mi', value: 'personal' },
  { key: 'A mi y a mi familia', value: 'familiar' },
];

const Step2 = ({ setInitialValues }: any) => {
  const [userState, setUserState] = useState<UserSate | undefined>();

  useEffect(() => {
    async function populateUserState() {
      try {
        const user = await fetchRandomUser();
        setUserState(user);
        setInitialValues((prev: QuoteFormDataType) => ({ ...prev, ...user }));
      } catch (error) {
        console.error('get-user-api', error);
      }
    }
    populateUserState();
  }, []);

  return (
    <div>
      <h1>Hola, {userState && userState.firstName}</h1>
      <small>Valida que los datos sean correctos</small>
      <p>Datos personales del titular</p>
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
      <FormikControl
        control="input"
        type="text"
        label="Nombres"
        name="firstName"
      />
      <FormikControl
        control="input"
        type="text"
        label="Apellido Paterno"
        name="paternalLastName"
      />
      <FormikControl
        control="input"
        type="text"
        label="Apellido Materno"
        name="maternalLastName"
      />
      <FormikControl
        control="input"
        type="date"
        label="Fecha de naciemiento"
        name="birthdate"
      />

      <FormikControl
        control="radio"
        options={genderOptions}
        label="Genero"
        name="gender"
      />
      <FormikControl
        control="radio"
        options={insuranceClientOptions}
        label="¿A quien vamos a asegurar?"
        name="insuranceClient"
      />
      <button className="button button--primary" type="submit">
        continuar
      </button>
    </div>
  );
};
export default Step2;
