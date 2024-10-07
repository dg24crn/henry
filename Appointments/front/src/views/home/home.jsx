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
            Welcome to our museum, where history, art, and culture converge. Our
            mission is to preserve the treasures of the past while inspiring
            curiosity and creativity in the present. Through carefully curated
            exhibits and engaging experiences, we aim to transport our visitors
            through time, exploring the wonders of ancient civilizations,
            groundbreaking art movements, and the stories that shaped our world.
          </p>
        </div>
        <div className={styles.whatContainer}>
          <h1>What we do?</h1>
          <p>
            At our museum, we bring history to life and foster a deeper
            connection with the worlds cultural heritage. Through immersive
            exhibitions, interactive displays, and educational programs, we
            offer visitors a chance to explore art, history, and science in a
            meaningful and engaging way. Our goal is to inspire curiosity and
            spark a lifelong love for learning by presenting the past and
            present in innovative formats.
          </p>
        </div>
      </div>
      <div id="work" className={styles.workContainer}>
        <div>
          <h1>Our Work</h1>
        </div>
        <div className={styles.artworkContainer}>
          <div className={styles.artwork}>
            <img src="../src/assets/img/aw1.jpg" alt="aw1" />
            <h2>Taco Hat</h2>
          </div>
          <div className={styles.artwork}>
            <img src="../src/assets/img/aw2.jpg" alt="aw1" />
            <h2>Waky Waky</h2>
          </div>
          <div className={styles.artwork}>
            <img src="../src/assets/img/aw3.jpg" alt="aw1" />
            <h2>Sleepy Squirrel</h2>
          </div>
          <div className={styles.artwork}>
            <img src="../src/assets/img/aw4.jpg" alt="aw1" />
            <h2>DJ Hamster</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
