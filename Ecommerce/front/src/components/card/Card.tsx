/* eslint-disable @next/next/no-img-element */
import { IProduct } from "@/interfaces/IProduct";
import styles from "./Card.module.css";

export const Card: React.FC<IProduct> = ({
  id,
  name,
  price,
  description,
  image,
  stock,
  categoryId,
}) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContainer}>
        <img className={styles.cardImage} src={image} alt="Product Image" />
        <hr />
        <h2 className={styles.cardName}>{name}</h2>
        <p className={styles.cardPrice}>${price}</p>
        <p className={styles.cardStock}>Stock: {stock}</p>
      </div>
    </div>
  );
};
