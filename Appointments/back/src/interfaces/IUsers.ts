export interface IUser {
  id: number;
  name: string;
  email: string;
  birthdate: string;
  nDni: string;
  credentialsId: number;
}

export interface IUserDTO {
  name: string;
  email: string;
  birthdate: string;
  nDni: string;
  username: string;
  password: string;
}
