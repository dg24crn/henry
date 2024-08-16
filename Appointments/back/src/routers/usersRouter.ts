import { Router } from "express";
import {
  getAllUsersController,
  getUserByIdController,
  loginUserController,
  createUserController,
} from "../controllers/usersController";

export const usersRouter = Router();

usersRouter.get("/users", getAllUsersController);
usersRouter.get("/users/:userId", getUserByIdController);
usersRouter.post("/users/register", createUserController);
usersRouter.post("/users/login", loginUserController);