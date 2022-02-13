import { Link } from 'react-router-dom';
import MainMenu from '../components/organims/MainMenu'


const Menu = ({ tableNumber, cart, setCart }) => {
    return (
        <>
            {cart.length === 0 ? "" : <Link to={`/table/${tableNumber}/menu/order`}>Ver mi orden</Link>}
            <br />
            <Link to={`/table/${tableNumber}`}>Volver a home</Link>
            <br />
            {`Mesa Nro: ${tableNumber}`}
            <MainMenu cart={cart} setCart={setCart} />
        </>
    )
};

export default Menu;
