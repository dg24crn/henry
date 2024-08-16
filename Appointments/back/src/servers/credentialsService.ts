import Credentials from "../entities/Credentials"
import { ICredentialDTO, IValidateCredentialDTO } from "../interfaces/ICredentials"
import { credentialsModel } from "../repos/Repos"

//* Crear credencial
export const createCredentialService = async (createCredential: ICredentialDTO) => {
  const newCredential: Credentials = credentialsModel.create(createCredential)
  await credentialsModel.save(newCredential)
  return newCredential
}

//* Validar Credenciales
export const validateCredentialService = async (validateCredential: IValidateCredentialDTO) => {
  const { username, password } = validateCredential
  const findCredential: Credentials = await credentialsModel.findOneBy({username})

  if(!findCredential) {
    throw Error("Usuario no encontrado...")
  }
  if(password !== findCredential?.password) {
    throw Error("Contraseña Incorrecta.")
  }
  return findCredential
}