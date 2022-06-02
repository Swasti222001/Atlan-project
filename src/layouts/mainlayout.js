import React from "react";
import Listlayout from "../component/listcomp/list";
import Header from "../component/headercomp/header";
import InputFields from "../component/Inputcomp/input";
import styles from './mainlayout.module.css'
import ButtonCustom from "../component/buttoncomp/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

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
      <ButtonCustom
          secondary
          customStyle={{ marginTop: '1rem' }}
          btnText={'Run Query'}
          // onClick={handleClick}
          rightIcon={<FontAwesomeIcon icon={faCaretRight} />}
        />
    </div>
  );
};

export default mainlayout;
