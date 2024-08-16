import { Request, Response } from "express";
import Appointments from "../entities/Appointments";
import { cancelAppointmentService, getAllAppointmentsService, getAppointmentByIdService, scheduleAppointmentService } from "../servers/appointmentsService";
import { IAppointmentDTO } from "../interfaces/IAppointments";

//* GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
export const getAllAppointmentsController = async (req: Request, res: Response) => {
    try {
        const getAllAppointments: Appointments[] = await getAllAppointmentsService()
        res.status(200).json(getAllAppointments)
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}

//* GET /appointment/:appointmentId => Obtener el detalle de un turno específico.
export const getAppointmentByIdController = async (req: Request<{appointmentId: string},{},{}>, res: Response) => {
    try {
        const {appointmentId} = req.params
        const appointment = await getAppointmentByIdService(Number(appointmentId))
        res.status(200).json(appointment)
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}

//* POST /appointment/schedule => Agendar un nuevo turno.
export const scheduleAppointmentController = async (req: Request<{}, {}, IAppointmentDTO>, res: Response) => {
    try {
        const { date, time, userId } = req.body
        const newAppointment: Appointments = await scheduleAppointmentService({
            date,
            time,
            userId
        })
        res.status(201).json(newAppointment)
    } catch (error: any) {
        res.status(400).json({message:error.message})
    }
}

//* PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.
export const cancelAppointmentController = async (req: Request<{ appointmentId: number }>, res: Response) => {
    try {
        const { appointmentId } = req.params;
        await cancelAppointmentService(Number(appointmentId));
        res.status(200).json({ message: "Turno Cancelado con Éxito" });
    } catch (error: any) {
        res.status(400).json({ message: "Error al cancelar el turno", error: error.message });
    }
};