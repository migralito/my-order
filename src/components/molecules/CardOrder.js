const CardOrder = ({ quantity, e, i, setQuantity }) => {

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
            <h3>{e.title}</h3>
            <p>{e.description}</p>
            <p>{`Cantidad: ${quantity[i].quantity}`}</p>
            {quantity[i].quantity === 1 ?
                <button onClick={handleQuantityAdd(i)}>+</button>
                :
                <>
                    <button onClick={handleQuantityAdd(i)}>+</button>
                    <button onClick={handleQuantitySubtract(i)}>-</button>
                </>
            }
            <h4>{`Total: $${e.price * quantity[i].quantity}`}</h4>
        </>
    )
};

export default CardOrder;
