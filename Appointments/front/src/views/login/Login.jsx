import { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import { useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from "../../redux-toolkit/reducer";

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.username)
      errors.username = "El nombre de usuario es requerido";
    if (!formData.password) errors.password = "La contraseña es requerida";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:3000/users/login",
          formData
        );
        dispatch(addUser(response.data.user))
        console.log("Usuario autenticado:", response.data);
        alert("Login exitoso");
        console.log("Respuesta del servidor:", response.data);
        navigate('/appointments')

      } catch (error) {
        setMessage("Error al iniciar sesión");
        console.error("Error al iniciar sesión:", error);
      }
    }
  };

  return (
    <form className={styles.loginContainer} onSubmit={handleSubmit}>
      <h1>Iniciar Sesión</h1>
      {message && (
        <p
          className={
            message.includes("exitoso") ? styles.success : styles.error
          }
        >
          {message}
        </p>
      )}
      <div>
        <label>Nombre de Usuario</label>
        <br />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        {errors.username && (
          <span className={styles.error}>{errors.username}</span>
        )}
      </div>
      <div>
        <label>Contraseña</label>
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        {errors.password && (
          <span className={styles.error}>{errors.password}</span>
        )}
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};
