import { Link } from "react-router-dom";
import CardCategorie from "../components/molecules/CardCategorie";
import HeaderBrandTable from "../components/molecules/HeaderBrandTable";
import styles from './Home.module.css'
import camarero from '../images/camarero.jpg'
import menu from '../images/menu.jpg'

const Home = ({ tableNumber }) => {
    return <div className={styles.home}>
        <HeaderBrandTable tableNumber={tableNumber} />
        <div className={styles.container}>
            <Link to={`/table/${tableNumber}/call`} className={styles.link}>
                <CardCategorie source={camarero} clases={styles.card} alternativo={'llamar-camarera/o'} />
            </Link>
            <Link to={`/table/${tableNumber}/menu`} className={styles.link}>
                <CardCategorie source={menu} clases={styles.card} alternativo={'ver-menu'} />
            </Link>
        </div>
    </div>
};

export default Home;
