import { Router } from "express";
import { usersRouter } from "./usersRouter";
import { appointmentsRouter } from "./appointmentsRouter";

export const router = Router()

router.use(usersRouter)
router.use(appointmentsRouter)