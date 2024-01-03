import styles from "./about.module.css";
import imgUrl from "../../assets/about/pharmasict-serving-customer-drug-store 1.png";
export default function About() {
  return (
    <section className={styles.aboutSection}>
      <img src={imgUrl} alt="pharmasict-serving-customer-drug-store 1" />
      <div className={styles.aboutContent}>
        <h2>About Us</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
      </div>
    </section>
  );
}
