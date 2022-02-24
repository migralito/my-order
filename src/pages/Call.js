import { Link } from 'react-router-dom';
import HeaderBrandTable from '../components/molecules/HeaderBrandTable';

const Call = ({ tableNumber }) => {
    return (
        <>
            <HeaderBrandTable tableNumber={tableNumber} />
            <p>Me llamaste</p>
            <Link to={`/table/${tableNumber}`}>Volver a home</Link>
        </>
    )
};

export default Call;
