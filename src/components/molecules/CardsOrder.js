import CardOrder from "../molecules/CardOrder"

const CardsOrder = ({ quantity, setQuantity, cart }) => {
    return (
        <>
            {cart.map((e, i) => (
                <CardOrder key={e.id} setQuantity={setQuantity} quantity={quantity} e={e} i={i} />
            ))}
        </>
    )
}



    ;

export default CardsOrder;
