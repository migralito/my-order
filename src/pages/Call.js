import { Link } from 'react-router-dom';
import Description from '../components/Description';
import HeaderBrandTable from '../components/molecules/HeaderBrandTable';

const Call = ({ tableNumber }) => {
    return (
        <>
            <HeaderBrandTable tableNumber={tableNumber}/>
            <Description description={"Me llamaste"} />
            <Link to={`/table/${tableNumber}`}>Volver a home</Link>
        </>
    )
};

export default Call;
