import { app } from "./src/app";
import dotenv from "dotenv";
import { PORT } from "./src/config/envs";
import "reflect-metadata";
import { AppDataSource } from "./src/config/datasource";

dotenv.config();

AppDataSource.initialize().then(res => {
  console.log("Database Connected Succesfully");
  app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
  });
});
