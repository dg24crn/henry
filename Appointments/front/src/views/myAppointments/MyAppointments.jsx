import { useEffect, useState } from "react";
import { Appointment } from "../../components/appointment/Appointment";
import styles from "./MyAppointments.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserAppointments } from "../../redux-toolkit/reducer";
import { CreateAppointment } from "../createAppointment/CreateAppointment";

export const MyAppointments = () => {
  const [appts, setAppts] = useState([]);
  const userData = useSelector((state) => state.userData.userActive);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/${userData.id}`
        );
        dispatch(addUserAppointments(response.data));
        setAppts(response.data.appointments);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    if (!userData.name) {
      navigate("/");
    } else {
      fetchData();
    }
  }, [dispatch, navigate, userData.id, userData.name]);

  return (
    <div>
      <CreateAppointment />
      <h1 className={styles.turnosTitle}>Appointments:</h1>
      {appts.length ? (
        <div className={styles.appointmentsGrid}>
          {appts.map(({ time, date, id, status }) => (
            <Appointment
              key={id}
              time={time}
              date={date}
              id={id}
              status={status}
            />
          ))}
        </div>
      ) : (
        <div className={styles.noApt}>No appointments available.</div>
      )}
    </div>
  );
};
