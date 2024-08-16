import { useState } from "react";
import axios from "axios";
import styles from "./CreateAppointment.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CreateAppointment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const userData = useSelector((state) => state.userData.userActive);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.date) errors.date = "La fecha es requerida";
    if (!formData.time) errors.time = "La hora es requerida";

    if (formData.date) {
      const selectedDate = new Date(formData.date);
      const dayOfWeek = selectedDate.getDay();

      if (dayOfWeek === 0 || dayOfWeek === 6) {
        errors.date = "No se pueden agendar visitas los fines de semana";
      }
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:3000/appointment/schedule",
          {
            date: formData.date,
            time: formData.time,
            userId: userData.id,
          }
        );
        alert("Turno agendado exitosamente");
        navigate("/home");
        console.log("Respuesta del servidor:", response.data);
      } catch (error) {
        setMessage("Error al agendar turno");
        console.error("Error al agendar turno:", error);
      }
    }
  };

  return (
    <form className={styles.createAppointmentContainer} onSubmit={handleSubmit}>
      <h1>Agendar Visita</h1>
      {message && <p className={styles.success}>{message}</p>}
      <div>
        <label>Fecha</label>
        <br />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <br />
        {errors.date && <span className={styles.error}>{errors.date}</span>}
      </div>
      <br />
      <div>
        <label>Hora</label>
        <br />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <br />
        {errors.time && <span className={styles.error}>{errors.time}</span>}
      </div>
      <br />
      <button type="submit">Agendar</button>
    </form>
  );
};
