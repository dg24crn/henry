import Appointments from "../entities/Appointments";
import Users from "../entities/Users";
import { IAppointmentDTO } from "../interfaces/IAppointments";
import { appointmentsModel, usersModel } from "../repos/Repos";

//* Obtener todos los turnos
export const getAllAppointmentsService = async () => {
  const getAllAppointments: Appointments[] = await appointmentsModel.find();
  return getAllAppointments;
};

//* Obtener turno por su ID
export const getAppointmentByIdService = async (appointmentId: number) => {
  const appointment: Appointments | null = await appointmentsModel.findOneBy({
    id: appointmentId,
  });
  if (!appointment) {
    throw Error("No existe el turno.");
  }
  return appointment;
};

//* Crear nuevo turno
export const scheduleAppointmentService = async (
  scheduleAppointment: IAppointmentDTO
) => {
  const newAppointment: Appointments =
    appointmentsModel.create(scheduleAppointment);
  await appointmentsModel.save(newAppointment);

  const user: Users | null = await usersModel.findOneBy({
    id: scheduleAppointment.userId,
  });

  if (!user) {
    throw Error("No existe el usuario.");
  }
  newAppointment.user = user;

  await appointmentsModel.save(newAppointment);
  return newAppointment;
};

//* Cancelar turno
export const cancelAppointmentService = async (appointmentId: number) => {
  const appointment = await appointmentsModel.findOneBy({ id: appointmentId });

  if (!appointment) {
      throw new Error("No existe el turno");
  }
  appointment.status = false;
  await appointmentsModel.save(appointment);
};