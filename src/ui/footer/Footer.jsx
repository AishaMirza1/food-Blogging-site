import styles from "./footer.module.css";
import imgSrc from "../../assets/logo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
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
        <li>
          <a href="#" target="blank">
            example2020@gmail.com
          </a>
        </li>
        <li>(904) 443-0343</li>
      </ul>
      <ul>
        <li className={styles.linkHeader}>More</li>
        <li>
          <a href="#" target="blank">
            About Us
          </a>
        </li>
        <li>
          {" "}
          <a href="#" target="blank">
            Products
          </a>
        </li>
        <li>
          {" "}
          <a href="#" target="blank">
            Career
          </a>
        </li>
        <li>
          {" "}
          <a href="#" target="blank">
            Contact Us
          </a>
        </li>
      </ul>
      <ul className={styles.logosContainer}>
        <li className={styles.linkHeader}>Social Links</li>
        <div>
          <li>
            <a href="#" target="blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#" target="blank">
              {" "}
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#" target="blank">
              <FaFacebookF />
            </a>
          </li>
        </div>
      </ul>
      <span>© 2022 Food Truck Example</span>
    </footer>
  );
}
