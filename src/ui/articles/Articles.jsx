import { useRef, useState } from "react";
import ArticleCard from "./ArticleCard";
import cardData from "../../data/data";
import styles from "./articles.module.css";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
export default function ArticleSection() {
  console.log(cardData);
  const ref = useRef(null);
  const [FirstCardPage, setFirstCardPage] = useState(true);
  function handlePrev() {
    let width = ref.current.clientWidth;
    ref.current.scrollLeft = ref.current.scrollLeft - width - 185;
    setFirstCardPage(true);
  }
  function handleNext() {
    let width = ref.current.clientWidth;
    ref.current.scrollLeft = ref.current.scrollLeft + width + 185;
    setFirstCardPage(false);
  }

  return (
    <section className={styles.articleSection}>
      <h2>Latest Articles</h2>
      <div ref={ref} className={styles.articlesCarousel}>
        {/* {cardData.map((card, index) => {
          return <ArticleCard key={`Card-${index}`} card={card} />;
        })} */}
        <div className={styles.cardsPage}>
          <ArticleCard card={cardData[0]} />
          <ArticleCard card={cardData[1]} />
          <ArticleCard card={cardData[2]} />
        </div>
        <div className={styles.cardsPage}>
          <ArticleCard card={cardData[3]} />
          <ArticleCard card={cardData[4]} />
          <ArticleCard card={cardData[5]} />
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button
          onClick={handlePrev}
          className={
            FirstCardPage ? `${styles.btnNotActive}` : `${styles.btnActive}`
          }
          disabled={FirstCardPage}
        >
          <FaAngleLeft />
        </button>
        <span>{FirstCardPage ? 1 : 2}/2</span>
        <button
          onClick={handleNext}
          className={
            FirstCardPage ? `${styles.btnActive}` : `${styles.btnNotActive}`
          }
          disabled={!FirstCardPage}
        >
          <FaAngleRight />
        </button>
      </div>
    </section>
  );
}
