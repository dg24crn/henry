import { Request, Response } from "express";
import Users from "../entities/Users";
import { createUserService, getAllUsersService, getUserByIdService, loginUserService } from "../servers/usersService";
import { IUserDTO } from "../interfaces/IUsers";
import { ICredentialDTO, IValidateCredentialDTO } from "../interfaces/ICredentials";
import Credentials from "../entities/Credentials";

//* GET /users => Obtener el listado de todos los usuarios.
export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const usersData: Users[] = await getAllUsersService();
    res.status(200).json(usersData);
  } catch (error: any) {
    res.status(400).json({ message: error.message});
  }
};

//* GET /users/:UserId => Obtener el detalle de un usuario específico.
export const getUserByIdController = async (req: Request <{userId: string},{},{}>, res: Response) => {
    try {
        const { userId } = req.params
        const user: Users = await getUserByIdService(Number(userId))
        res.status(200).json(user)
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
};

//* POST /users/register => Registro de un nuevo usuario.
export const createUserController = async (req: Request<{},{}, IUserDTO>, res: Response) => {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body

        const newUser: Users = await createUserService({
            name, email, birthdate, nDni, username, password
        })
        res.status(201).json(newUser)
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
};

//* POST /users/login => Login del usuario a la aplicación.
export const loginUserController = async (req: Request<{},{}, IValidateCredentialDTO>, res: Response) => {
    try {
        const { username, password } = req.body

        const user: Users = await loginUserService({
            username, password
        });

        if (!user) {
          res.status(401).json({ message: "Credenciales inválidas" });
          return;
        }

        const { id, name, email, birthdate, nDni } = user;
        res.status(200).json({
          login: true,
          user: { id, name, email, birthdate, nDni }
        });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};
