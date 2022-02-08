import Description from '../components/Description';
import Input from '../components/Input';
import { Link } from "react-router-dom";


const Home = ({tableNumber, setTableNumber}) => {
  return (
    <>
      <Description description={'Bienvenido a La Farola Caballito'} />
      <Description description={'Por favor ingresá tu número de mesa'} />
      <Input value={tableNumber} setTableNumber={setTableNumber}/>
      <Link to={`table/${tableNumber}`}>Ingresar</Link> 
    </>
  )
};

export default Home;
