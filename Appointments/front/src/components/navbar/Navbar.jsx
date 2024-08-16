import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const userData = useSelector((state) => state.userData.userActive);

  return (
    <nav className={styles.navbarContainer}>
      <img src="../src/assets/img/Logo.png" alt="Logo" />
      <Link className={styles.navbarContainerLink} to="/home">
        Inicio
      </Link>
      <Link className={styles.navbarContainerLink} to="/about">
        Acerca De
      </Link>
      {userData.name && (
        <Link className={styles.navbarContainerLink} to="/appointments">
          Mis Turnos
        </Link>
      )}
      <Link className={styles.navbarContainerLink} to="/login">
        Iniciar Sesion
      </Link>
      <Link className={styles.navbarContainerLink} to="/register">
        Registrarse
      </Link>
    </nav>
  );
};
