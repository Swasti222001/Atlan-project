import styles from './list.module.css';
import Categorytable from '../tablecomp/Categorytable';
import Customertable from '../tablecomp/Customertable';


// fontawesome imports
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const listlayout = () => {
  const tablelist = [
    {
      name: "Categories",
    },
    {
      name: "Customers",
    },
    {
      name: "Products",
    },
    {
      name: "Regions",
    },
    {
      name: "Shippers",
    },
    {
      name: "Suppliers",
    },
    {
      name: "Territories",
    },
  ];

  return (
    <div className={styles.listmain}>
      <h2>Tables</h2>
      <div className={styles.listbgmain}>
        {tablelist.map((listlayout) => (
          <div className={styles.listbg}>
            <p><FontAwesomeIcon icon={faTable} /><b>{listlayout.name}</b></p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default listlayout;
