import { Link } from "react-router-dom";


const Order = ({cart, tableNumber}) => {
    console.log(cart)
    return (
        <>
            {cart.map((e)=> (
                e.title
            ))}
            <Link to={`/table/${tableNumber}/menu`}>Volver al menú</Link>
        </>
    )
};

export default Order;
