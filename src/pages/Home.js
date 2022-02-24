import { Link } from "react-router-dom";
import HeaderBrandTable from "../components/molecules/HeaderBrandTable";
import styles from './Home.module.css'
import camarero from '../images/camarero.jpg'
import menu from '../images/menu.jpg'

const Home = ({ tableNumber }) => {
    return (
        <div className={styles.home}>
            <HeaderBrandTable tableNumber={tableNumber} />
            <div className={styles.container}>
                <Link to={`/table/${tableNumber}/call`} className={styles.link}>
                    <img alt={"llamar-camarero"} src={camarero} className={styles.imgCardCategorie} />
                </Link>
                <Link to={`/table/${tableNumber}/menu`} className={styles.link}>
                    <img alt={"menu"} src={menu} className={styles.imgCardCategorie} />
                </Link>
            </div>
        </div>
    )
};

export default Home;
