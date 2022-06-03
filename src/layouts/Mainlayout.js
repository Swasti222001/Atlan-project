import { useState } from 'react';
import Listlayout from "../component/listcomp/List";
import Header from "../component/headercomp/Header";
import styles from './mainlayout.module.css'
import ButtonCustom from "../component/buttoncomp/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Conditional from '../component/tablecomp/Conditional'
import InputConditional from '../component/Inputcomp/InputConditional';

const Mainlayout = () => {
  const [table, settable] = useState()
  const [input, setinput] = useState()
  return (
    <>
      <div>
        <Header />
      </div>
      <div className={styles.mainlayoutdiv}>

        <div className={styles.mainlayoutdiv2}>
          <div className={styles.listlayoutdiv}>
            <Listlayout
              settable={settable}
              setinput={setinput} />
          </div>
          <div className={styles.inputlayoutdiv} >
            <InputConditional input={input} />
            <ButtonCustom
              settable={settable}
              secondary
              customStyle={{ marginTop: '1.2rem' }}
              btnText={'Run Query'}
              // onClick={handleClick}
              rightIcon={<FontAwesomeIcon icon={faCaretRight} />}
            />
          </div>
        </div>
        <div className={styles.outputmain}>
          <p>
            <b>OUTPUT</b>
          </p>
          {/* <Categorytable></Categorytable> */}
          <Conditional table={table} />
        </div>

      </div>
    </>
  );
};

export default Mainlayout;
