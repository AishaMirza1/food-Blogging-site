import styles from "./button.module.css";
import PropTypes from "prop-types";
export default function Button({
  btnInnerHtml,
  isPrimary,
  isPrimary2,
  isPrimary3,
}) {
  return (
    <button
      className={
        isPrimary
          ? `${styles.btn} ${styles.btnPrimary}`
          : isPrimary2
          ? `${styles.btn} ${styles.primary2} `
          : isPrimary3
          ? `${styles.btn} ${styles.primary3} `
          : `${styles.btn} ${styles.secondary}`
      }
    >
      {btnInnerHtml}
    </button>
  );
}

Button.propTypes = {
  btnInnerHtml: PropTypes.string,
  isPrimary: PropTypes.bool,
  isPrimary2: PropTypes.bool,
  isPrimary3: PropTypes.bool,
};
