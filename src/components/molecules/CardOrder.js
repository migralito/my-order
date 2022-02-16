import Button from "../Button";
import Description from "../Description"
import Header from "../Header";

const CardOrder = ({quantity, e, i, setQuantity}) => {

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
            <Header description={e.title} />
            <Description description={e.description} />
            <Description description={`Cantidad: ${quantity[i].quantity}`} />
            {quantity[i].quantity === 1 ?
                <Button handleClick={handleQuantityAdd(i)} titleButton={"+"} />
                :
                <>
                    <Button handleClick={handleQuantityAdd(i)} titleButton={"+"} />
                    <Button handleClick={handleQuantitySubtract(i)} titleButton={"-"} />
                </>
            }
            <Header description={`Total: $${e.price * quantity[i].quantity}`} />
        </>
        )
};

export default CardOrder;
