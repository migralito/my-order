import { Link } from "react-router-dom";
import Description from "../components/Description";
import Card from "../components/molecules/Card";

const Table = ({ tableNumber }) => {
    return <>
        <Description description={`Mesa N° ${tableNumber}`} />
        <Link to={`/table/${tableNumber}/call`}>
            <Card source={'#'} description={'Llamar Camarera/o'} alternativo={'llamar-camarera/o'}/>
        </Link>
        <Link to={`/table/${tableNumber}/menu`}>
            <Card source={'#'} description={'Ver Menú'} alternativo={'ver-menu'}/>
        </Link>
    </>
};

export default Table;
