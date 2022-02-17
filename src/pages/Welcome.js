import Header from '../components/Header';
import Input from '../components/Input';
import Brand from '../components/Brand';
import styles from './Welcome.module.css'



const Welcome = ({ tableNumber, setTableNumber }) => {
  return (
    <div className={styles.welcome}>
      <Header description={'Bienvenidos...'} clases={styles.header}/>
      <Brand clases={styles.brand} />
      <Input tableNumber={tableNumber} setTableNumber={setTableNumber} />
    </div>
  )
};

export default Welcome;
