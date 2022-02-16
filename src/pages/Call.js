import { Link } from 'react-router-dom';
import Description from '../components/Description';

const Call = ({ tableNumber }) => {
    return (
        <>
            {`Mesa Nro: ${tableNumber}`}
            <Description description={"Me llamaste"} />
            <Link to={`/table/${tableNumber}`}>Volver a home</Link>
        </>
    )
};

export default Call;
