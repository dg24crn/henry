import styles from "./Appointment.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeAppointment } from "../../redux-toolkit/reducer";
import { useNavigate } from "react-router-dom";

export const Appointment = ({ id, date, time, status }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cancelAppointment = async () => {
    try {
      await axios.put(`http://localhost:3000/appointment/cancel/${id}`);
      dispatch(removeAppointment(id));
      alert("Turno Cancelado");
      navigate("/home");
    } catch (error) {
      console.error("Ocurrió un error al cancelar el turno", error);
    }
  };

  return (
    <div className={styles.appointmentContainer}>
      <h2>Appointment #{id}</h2>
      <p>
        Date: <span>{date}</span>
      </p>
      <p>
        Time: <span>{time}</span>
      </p>
      <p>
        Status: <span>{status ? "Active" : "Cancelled"}</span>
      </p>
      <button disabled={status === false} onClick={cancelAppointment}>
        Cancel Appointment
      </button>
    </div>
  );
};
