import { Link } from "react-router-dom";
import { updateSelectedProduct } from "../services/menu";

const Order = ({ cart, setCart, tableNumber }) => {

    const handleChangeQuantity = (quantity) => (e) => {
        const findProductQuantity = {
            ...quantity,
            quantity: parseInt(e.target.value)
        }
        updateSelectedProduct(findProductQuantity.id, findProductQuantity)
            .then((response) => {
                const cartFilter = cart.filter((e) => e.id !== response.id)
                setCart([findProductQuantity, ...cartFilter])
            }
            )
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
                        <label>Cantidad</label>
                        {e.quantity === 1 ?
                            <select onChange={handleChangeQuantity(e)}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                             </select> : 
                            <select onChange={handleChangeQuantity(e)}>
                                <option defaultValue={e.quantity}>{e.quantity}</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        }
                        <p>{`$ ${e.quantity * e.price}`}</p>
                    </div>
                ))}
            </div>
            <div><Link to={`/table/${tableNumber}/menu`}>Volver a seleccionar el menú</Link></div>
        </>
    )
};

export default Order;
