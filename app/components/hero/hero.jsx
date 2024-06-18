import styles from "./hero.module.css";
import utils from "../../utils.module.css";
import Image from "next/image";
import Link from "next/link";
import sy from "../../../public/imgs/sy.svg";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={[utils.container, styles.align].join(" ")}>
      <h1 className={styles.nour}>Nour Dawwa</h1>
      <div className={styles.based}>
        <h2 className={styles.based__text}>Based in Syria</h2>
        <Image src={sy} className={styles.based__sy} alt="syria shape" />
      </div>
      </div>
      <div className={styles.scroll}>
        <div className={styles.scroll__wrapper}>
          <p className={styles.scroll__item}>
            , Front-End , Medical Student , Life Enthusiast
          </p>
          <p className={styles.scroll__item}>
            , Front-End , Medical Student , Life Enthusiast
          </p>
          <p className={styles.scroll__item}>
            , Front-End , Medical Student , Life Enthusiast
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
