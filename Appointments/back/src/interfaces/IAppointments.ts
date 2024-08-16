export interface IAppointment {
    id: number
    date: string
    time: string
    userId: number
    status: boolean
}

export interface IAppointmentDTO {
    date: string
    time: string
    userId: number
}