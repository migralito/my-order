import Button from "../molecules/Button"
import Description from "../Description"
import Header from "../Header";

const CardOrder = ({handleQuantityAdd, handleQuantitySubtract ,e , i, quantity}) => {

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
