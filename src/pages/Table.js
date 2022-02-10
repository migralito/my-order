import { Link } from "react-router-dom";
import Description from "../components/Description";
import Card from "../components/molecules/Card";

const Table = ({ tableNumber }) => {
    return <>
        <Description description={`Mesa N° ${tableNumber}`} />
        <Link to={`/table/${tableNumber}/call`}>
            <Card source={'https://d2pur3iezf4d1j.cloudfront.net/images/1f0a654aa7c65395487d98fd4784c718'} alternativo={'llamar-camarera/o'}/>
        </Link>
        <Link to={`/table/${tableNumber}/menu`}>
            <Card source={'https://enlacocina.b-cdn.net/wp-content/uploads/2018/01/men%C3%BA-1024x770.png'} alternativo={'ver-menu'}/>
        </Link>
    </>
};

export default Table;
