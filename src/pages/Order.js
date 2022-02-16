
import MainOrder from "../components/organims/MainOrder"


const Order = ({ cart, tableNumber }) => {
    return (
        <>
            <MainOrder cart={cart} tableNumber={tableNumber} />
        </>
    )
};

export default Order;
