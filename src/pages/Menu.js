

import MainMenu from '../components/organims/MainMenu'

const Menu = ({ tableNumber, cart, setCart }) => {
    return (
        <>
            <MainMenu cart={cart} tableNumber={tableNumber} setCart={setCart} />
        </>
    )
};

export default Menu;
