import { useState } from "react";
import { Link } from "react-router-dom";

const Order = ({ cart, tableNumber }) => {

    const priceQuantityCart = cart.map((e) => {
        return {quantity: 1, price: e.price}
    })
    
    const [quantity, setQuantity] = useState(priceQuantityCart)


    const priceXCant = quantity.map((e)=>{
        return e.quantity * e.price
    })

    
    const total = priceXCant.reduce((acumulador, actual)=> acumulador + actual)


    const handleQuantityAdd = (i) => () => {
        const quantityAdd = [...quantity]
        quantityAdd[i].quantity = quantityAdd[i].quantity + 1 
        setQuantity(
         quantityAdd
        )
    }

    const handleQuantitySubtract = (i) => () => {
        const quantitySubtract = [...quantity]
        quantitySubtract[i].quantity = quantitySubtract[i].quantity - 1 
        setQuantity(
         quantitySubtract
        )
    }




    return (
        <>
         {`Mesa Nro: ${tableNumber}`}
            <h2>Mi orden</h2>
            <div>
                {cart.map((e, i) => (
                    <div key={e.id}>
                        <h4>{e.title}</h4>
                        <small>{e.description}</small>
                        <br />
                        <br />
                        <small style={{ display: "inline" }}>Cantidad: {quantity[i].quantity} </small>
                        {quantity[i].quantity === 1 ?
                            <button onClick={handleQuantityAdd(i)}>+</button>
                            :
                            <>
                                <button onClick={handleQuantityAdd(i)}>+</button>
                                <button onClick={handleQuantitySubtract(i)}>-</button>
                            </>
                        }
                        <p>Total: $ {e.price * quantity[i].quantity}</p>
                    </div>
                ))}
            </div>
            <h4>Total Orden: $ {total}</h4>
            <div><Link to={`/table/${tableNumber}/menu`}>Volver a seleccionar el menú</Link></div> 
        </>
    )
};

export default Order;
