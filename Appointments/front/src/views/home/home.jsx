import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.museoTitleContainer}>
        <h1 className={styles.museoTitle}>Museum of Historical Art</h1>
      </div>
      <div>
        <h1 className={styles.nuestrasObrasTitle}>Our Works</h1>
      </div>
      <div className={styles.artworkContainer}>
        <img src="../src/assets/img/aw1.jpg" alt="artwork1" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          quisquam dolor hic aspernatur explicabo nobis earum modi aliquid
          numquam accusamus. Reprehenderit provident sequi ex dolores architecto
          impedit quis inventore ad?
        </p>
      </div>
      <div className={styles.artworkContainer}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          earum eligendi culpa sint perspiciatis, ducimus libero nostrum
          accusantium iusto voluptates omnis esse saepe id ab natus? Natus nihil
          soluta consectetur!
        </p>
        <img src="../src/assets/img/aw2.jpg" alt="artwork2" />
      </div>
      <div className={styles.artworkContainer}>
        <img src="../src/assets/img/aw3.jpg" alt="artwork3" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
          maxime. Voluptates vitae vel labore, explicabo sunt pariatur atque, ut
          possimus modi dolore quam laboriosam quasi corrupti quod molestias
          minima. Laboriosam.
        </p>
      </div>
      <div className={styles.artworkContainer}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          ratione cumque mollitia facilis nisi unde reiciendis eaque animi.
          Soluta ea ab rerum consequuntur, earum ullam incidunt accusantium
          error. Et, adipisci!
        </p>
        <img src="../src/assets/img/aw4.jpg" alt="artwork4" />
      </div>
    </div>
  );
};
