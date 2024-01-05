import PropTypes from "prop-types";
import styles from "./articleCard.module.css";
import Button from "../button/Button";
export default function ArticleCard({ card }) {
  return (
    <div className={styles.articleCard}>
      <img src={card.imgSrc} alt={`img of ${card.cardHeader}`} />
      <div className={styles.cardData}>
        <h3>{card.cardHeader}</h3>
        <p>{card.cardInfo}</p>
        <Button btnInnerHtml="Read More" />
      </div>
    </div>
  );
}
ArticleCard.propTypes = {
  card: PropTypes.object,
};
