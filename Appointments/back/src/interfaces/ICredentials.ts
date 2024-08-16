export interface ICredential {
  id: number;
  username: string;
  password: string;
}

export interface ICredentialDTO {
  username: string;
  password: string;
}

export interface IValidateCredentialDTO extends ICredentialDTO {}