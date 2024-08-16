import { AppDataSource } from "../config/datasource";
import Appointments from "../entities/Appointments";
import Credentials from "../entities/Credentials";
import Users from "../entities/Users";

export const credentialsModel = AppDataSource.getRepository(Credentials)
export const usersModel = AppDataSource.getRepository(Users)
export const appointmentsModel = AppDataSource.getRepository(Appointments)