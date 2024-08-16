import Credentials from "../entities/Credentials";
import Users from "../entities/Users";
import { IValidateCredentialDTO } from "../interfaces/ICredentials";
import { IUserDTO } from "../interfaces/IUsers";
import { usersModel } from "../repos/Repos";
import { createCredentialService, validateCredentialService } from "./credentialsService";

//* Obtener todos los usuarios
export const getAllUsersService = async () => {
  const getAllUsers = await usersModel.find();
  return getAllUsers;
};

//* Obtener usuario por su ID
export const getUserByIdService = async (id: number): Promise<Users> => {
  const getUserById = await usersModel.findOne({
    where: { id },
    relations: ["appointments"]
  });
  if (!getUserById) {
    throw new Error("No se ha encontrado el usuario");
  }
  return getUserById;
};

//* Crear nuevo usuario
export const createUserService = async (createUser: IUserDTO) => {
  const newCredential: Credentials = await createCredentialService({
    username: createUser.username,
    password: createUser.password,
  });
  const newUser: Users = usersModel.create(createUser);
  newUser.credential = newCredential;
  await usersModel.save(newUser);

  return newUser;
};

//* Iniciar Sesión
export const loginUserService = async (loginUser: IValidateCredentialDTO) => {
  const validateCredential: Credentials = await validateCredentialService({
    username: loginUser.username,
    password: loginUser.password
  });

  const user: Users = await getUserByIdService(validateCredential.id);
  return user;
};
