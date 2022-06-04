import { useState, useEffect } from "react";
import Listlayout from "../component/listcomp/List";
import Header from "../component/headercomp/Header";
import "./mainlayout.css";
import ButtonCustom from "../component/buttoncomp/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import Conditional from "../component/tablecomp/Conditional";
import InputConditional from "../component/Inputcomp/InputConditional";
import { categories } from "../Tables/categories";
import { customers } from "../Tables/customers";
import { emp_terr } from "../Tables/employee_territories";
import { emp } from "../Tables/employees";
import { order_det } from "../Tables/order_details";
import { order } from "../Tables/orders";
import { products } from "../Tables/products";
import { regions } from "../Tables/regions";
import { shippers } from "../Tables/shippers";
import { territories } from "../Tables/territories";
import { suppliers } from "../Tables/suppliers";

const Mainlayout = () => {
  const [table, settable] = useState()
  const [input, setinput] = useState("")
  const [isDarkModeActive, setIsDarkModeActive] = useState()
  return (
    <div className={isDarkModeActive ? "darkMode" : "lightMode"}>
      <div>
        <Header
          isDarkModeActive={isDarkModeActive}
          setIsDarkModeActive={setIsDarkModeActive}
        />
      </div>
      <div className="mainlayoutdiv">
        <div className="mainlayoutdiv2">
          <div className="listlayoutdiv">
            <Listlayout settable={settable} setinput={setinput} />
          </div>
          <div className="inputlayoutdiv">
            <InputConditional input={input} />
            <ButtonCustom
              settable={settable}
              // settable={settable}
              inputFieldData
              secondary
              customStyle={{ marginTop: "1.2rem" }}
              btnText={"Run Query"}
              // onClick={handleClick}
              rightIcon={<FontAwesomeIcon icon={faCaretRight} />}
            />
          </div>
        </div>
        <div className="outputmain" id="table">
          <p>
            <b>OUTPUT</b>
            {/* <CSVLink data={csvData.csvFileData}>
              <FontAwesomeIcon icon={faDownload} className="csvdown" />
            </CSVLink> */}
          </p>
          <Conditional table={table} />
        </div>
      </div>
    </div>
  );
};

export default Mainlayout;
