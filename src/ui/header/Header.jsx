import styles from "./header.module.css";
import imgSrc from "../../assets/Rectangle 400.png";
import logo from "../../assets/logo.png";
import Button from "../button/Button";
import { useState } from "react";
import { useEffect } from "react";
export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth <= 380 ? setIsMobile(true) : setIsMobile(false);
    });
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <img src={logo} alt="truck logo" />
          <h1>
            Discover the <span>Best</span> Food and Drinks
          </h1>
          <p>
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <Button btnInnerHtml="Explore Now!" isPrimary />
        </div>
        <div className={styles.headerImg}>
          <img src={imgSrc} alt={``} />
          {isMobile ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="375"
              height="426"
              viewBox="0 0 375 426"
              fill="none"
            >
              <path
                d="M55.6077 18.45C20.4129 22.9359 3.87142 8.01914 0 0L375 0.723531V424.17C241.499 440.429 273.111 343.496 279.27 325.046C285.429 306.596 328.015 185.405 273.111 96.7723C218.207 8.13972 99.6011 12.8427 55.6077 18.45Z"
                fill="#E23744"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="752"
              height="839"
              viewBox="0 0 752 839"
              fill="none"
            >
              <path
                d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z"
                fill="#E23744"
              />
            </svg>
          )}
        </div>
      </div>
    </header>
  );
}
