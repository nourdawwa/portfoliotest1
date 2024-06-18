import "./addition.css";
import utils from "./utils.module.css";
import styles from "./page.module.css";
import Script from "next/script";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";

export default function Home() {
  return (
    <div className={utils.page}>
      {/* <div id="page" className={utils.overlay}>
      <Script src="/scripts/grained.js" />
      <Script src="/scripts/applygrained.js" /> */}
      <Header addClass={utils.container}/>
      <main>
        <Hero />
      </main>
      {/* </div> */}
    </div>
  );
}
