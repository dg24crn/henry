import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div id="home" className={styles.homeContainer}>
      <div className={styles.landingContainer}>
        <h1>Welcome to our world</h1>
      </div>
      <div id="info" className={styles.infoContainer}>
        <div className={styles.whoContainer}>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            labore laboriosam pariatur aliquam sit? Labore quod explicabo rem
            quaerat fugit mollitia adipisci sit aliquid ducimus dolore, aperiam
            saepe incidunt placeat?
          </p>
        </div>
        <div className={styles.whatContainer}>
          <h1>What we do?</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dicta
          iure voluptates neque, unde optio cumque. Iste incidunt, nam
          necessitatibus nihil perspiciatis reiciendis! Perferendis assumenda
          porro fugiat praesentium amet iste?
        </div>
      </div>
      <div id="work" className={styles.workContainer}>
        <h1>Our Work</h1>
      </div>
    </div>
  );
};
