import { DataSource } from "typeorm";
import { DB_DATABASE, DB_PASSWORD, DB_USERNAME } from "./envs";

import dotenv from "dotenv";
import Users from "../entities/Users";
import Credentials from "../entities/Credentials";
import Appointments from "../entities/Appointments";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [Users, Credentials, Appointments],
  subscribers: [],
  migrations: [],
});
