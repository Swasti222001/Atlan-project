import React from "react";
import Listlayout from "../component/listcomp/list";
import Header from "../component/headercomp/header";
import InputFields from "../component/Inputcomp/input";
import styles from './mainlayout.module.css'
const mainlayout = () => {
  return (
    <div className={styles.mainlayoutdiv}>
      <div>
      <Header />
      </div>
      <div className={styles.mainlayoutdiv2}>
      <div className={styles.listlayoutdiv}>
      <Listlayout />
      </div>
      <div className={styles.inputlayoutdiv}>
      <InputFields />
      </div>
      </div>
    </div>
  );
};

export default mainlayout;
