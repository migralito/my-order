import { useState } from "react";
import { Link } from "react-router-dom";

const Order = ({ cart, tableNumber }) => {

    const idCart = cart.map((e) => {
        return 1
    })


    const [quantity, setQuantity] = useState({
        ...idCart
    })

    console.log(quantity[0])
    console.log(quantity[1])

    const handleQuantityAdd = (e) => () => {
        setQuantity({
            ...quantity,
            id_1001: quantity[`id_${e.id}`] + 1
        })
    }

    const handleQuantitySubtract = (e) => () => {
        setQuantity({
            ...quantity,
            id_1001: quantity[`id_${e.id}`] - 1
        })
    }


    return (
        <>
            {`Mesa Nro: ${tableNumber}`}
            <h2>Mi orden</h2>
            <div>
                {cart.map((e) => (
                    <div key={e.id}>
                        <h4>{e.title}</h4>
                        <small>{e.description}</small>
                        <br />
                        <br />
                        <small style={{ display: "inline" }}>Cantidad: {`${quantity[`id_${e.id}`]}`} </small>
                        {quantity[`id_${e.id}`] === 1 ?
                            <button onClick={handleQuantityAdd(e)}>+</button>
                            :
                            <>
                                <button onClick={handleQuantityAdd(e)}>+</button>
                                <button onClick={handleQuantitySubtract(e)}>-</button>
                            </>
                        }
                        <p>Total: ${e.price * quantity[`id_${e.id}`]}</p>
                    </div>
                ))}
            </div>
            <div><Link to={`/table/${tableNumber}/menu`}>Volver a seleccionar el menú</Link></div>
        </>
    )
};

export default Order;
