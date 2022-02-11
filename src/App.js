import { useState } from 'react';
import Home from "./pages/Home";
import Table from "./pages/Table";
import Call from './pages/Call';
import Menu from './pages/Menu';
import Order from './pages/Order';
import {Routes, Route} from "react-router-dom";

function App() {

  const [tableNumber, setTableNumber] = useState('');

  const [cart, setCart] = useState([])

  console.log(tableNumber)
  console.log(cart)
  
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home tableNumber={tableNumber} setTableNumber={setTableNumber}/>} />
        <Route path="/table/:params" element={<Table tableNumber={tableNumber}/>} />
        <Route path="/table/:params/call" element={<Call/>} />
        <Route path="/table/:params/menu" element={<Menu tableNumber={tableNumber} cart={cart} setCart={setCart}/>} />
        <Route path="/table/:params/menu/order" element={<Order cart={cart} tableNumber={tableNumber}/>} />
      </Routes>
    </>
  );
}

export default App;
