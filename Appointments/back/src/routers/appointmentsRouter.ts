import { Router } from "express";
import {
  cancelAppointmentController,
  getAllAppointmentsController,
  getAppointmentByIdController,
  scheduleAppointmentController,
} from "../controllers/appointmentsController";

export const appointmentsRouter = Router();

appointmentsRouter.get("/appointments", getAllAppointmentsController);
appointmentsRouter.get("/appointment/:appointmentId", getAppointmentByIdController);
appointmentsRouter.post("/appointment/schedule", scheduleAppointmentController);
appointmentsRouter.put("/appointment/cancel/:appointmentId", cancelAppointmentController);
