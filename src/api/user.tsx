export interface UserApi {
  results?: ResultsEntity[] | null;
  info: Info;
}
export interface ResultsEntity {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: DobOrRegistered;
  registered: DobOrRegistered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}
export interface Name {
  title: string;
  first: string;
  last: string;
}
export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: Coordinates;
  timezone: Timezone;
}
export interface Street {
  number: number;
  name: string;
}
export interface Coordinates {
  latitude: string;
  longitude: string;
}
export interface Timezone {
  offset: string;
  description: string;
}
export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}
export interface DobOrRegistered {
  date: string;
  age: number;
}
export interface Id {
  name: string;
  value: string;
}
export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export type UserSate = {
  documentType: string;
  documentNumber: string;
  birthdate: string;
  firstName: string;
  paternalLastName: string;
  maternalLastName: string;
  gender: string;
};

export const fetchRandomUser = async () => {
  const endpoint = `https://randomuser.me/api`;
  const data = await (await fetch(endpoint)).json();
  const [firstUser] = data.results.map(
    ({ id, dob, name, gender }: ResultsEntity) => ({
      documentType: id.name,
      documentNumber: id.value,
      birthdate: dob.date,
      firstName: name.first,
      paternalLastName: name.last,
      maternalLastName: name.last,
      gender,
    })
  );
  return firstUser;
};
