import { Link } from "react-router-dom";
import Header from "../Header";
import CardOrder from "../molecules/CardOrder";

const MainOrder = ({ cart, tableNumber, setQuantity, quantity, handleQuantityAdd, handleQuantitySubtract, total }) => {
    return (
        <>
            <Header description={`Mesa Nro: ${tableNumber}`} />
            <Header description={"Mi orden"} />
            <div>
                {cart.map((e, i) => (
                    <CardOrder key={e.id} setQuantity={setQuantity} quantity={quantity} e={e} i={i} handleQuantityAdd={handleQuantityAdd} handleQuantitySubtract={handleQuantitySubtract}/>
                ))}
            </div>
            <Header description={`Total de la orden: $${total}`} />
            <Link to={`/table/${tableNumber}/menu`}>Volver a seleccionar el menú</Link>
        </>
    )
};

export default MainOrder;
