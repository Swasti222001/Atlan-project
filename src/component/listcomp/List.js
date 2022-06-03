import styles from './list.module.css';
// fontawesome imports
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Listlayout = ({ settable, setinput }) => {
  const tablelist = [
    {
      name: "categories",
    },
    {
      name: "customers",
    },
    {
      name: "products",
    },
    {
      name: "regions",
    },
    {
      name: "shippers",
    },
    {
      name: "suppliers",
    },
    {
      name: "territories",
    },
  ];

  return (
    <div className={styles.listmain}>
      <h2>Tables</h2>
      <div className={styles.listbgmain}>
        {tablelist.map((listlayout) => (
          <div className={styles.listbg} onClick={() => {
            settable(listlayout.name)
            setinput(listlayout.name)
          }} >
            <p><FontAwesomeIcon icon={faTable} /><b>{listlayout.name}</b></p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Listlayout;
