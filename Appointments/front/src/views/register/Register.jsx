import { useState } from "react";
import axios from "axios";
import styles from "./Register.module.css";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
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

    if (!formData.name) errors.name = "El nombre es requerido";
    if (!formData.email) errors.email = "El email es requerido";
    if (!formData.birthdate)
      errors.birthdate = "La fecha de nacimiento es requerida";
    if (!formData.nDni) errors.nDni = "El número de DNI es requerido";
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
          "http://localhost:3000/users/register",
          formData
        );
        response;
        setMessage("Registro exitoso");
      } catch (error) {
        setMessage("Error al registrar el usuario");
        console.error("Error al registrar el usuario:", error);
      }
    }
  };

  return (
    <form className={styles.registerContainer} onSubmit={handleSubmit}>
      <h1>Register</h1>
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
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>
      <div>
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>
      <div>
        <label>Birthdate</label>
        <br />
        <input
          type="text"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
        />
        <br />
        {errors.birthdate && (
          <span className={styles.error}>{errors.birthdate}</span>
        )}
      </div>
      <div>
        <label>ID Number</label>
        <br />
        <input
          type="text"
          name="nDni"
          value={formData.nDni}
          onChange={handleChange}
        />
        <br />
        {errors.nDni && <span className={styles.error}>{errors.nDni}</span>}
      </div>
      <div>
        <label>Username</label>
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
        <label>Password</label>
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
      <button type="submit">Register</button>
    </form>
  );
};
