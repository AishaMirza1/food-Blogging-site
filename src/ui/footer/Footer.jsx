import styles from "./footer.module.css";
import imgSrc from "../../assets/logo.png";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={imgSrc} alt="logo-png" />
      <ul>
        <li className={styles.linkHeader}>Contact Us</li>
        <li>
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </li>
        <li>example2020@gmail.com</li>
        <li>(904) 443-0343</li>
      </ul>
      <ul>
        <li className={styles.linkHeader}>More</li>
        <li>About Us</li>
        <li>Products</li>
        <li>Career</li>
        <li>Contact Us</li>
      </ul>
      <ul className={styles.logosContainer}>
        <li className={styles.linkHeader}>Social Links</li>
        <div>
          <li>li</li>
          <li>in</li>
          <li>tw</li>
        </div>
      </ul>
      <span>© 2022 Food Truck Example</span>
    </footer>
  );
}
