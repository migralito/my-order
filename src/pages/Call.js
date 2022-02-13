import { Link } from 'react-router-dom';

const Call = ({ tableNumber }) => {
    return (
        <>
            {`Mesa Nro: ${tableNumber}`}
            <h1>Me llamaste</h1>
            <Link to={`/table/${tableNumber}`}>Volver a home</Link>
        </>
    )
};

export default Call;
