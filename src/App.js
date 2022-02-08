import { useState } from 'react';
import Home from "./pages/Home";
import Table from "./pages/Table";
import Call from './pages/Call';
import Menu from './pages/Menu';
import {Routes, Route} from "react-router-dom";

function App() {

  const [tableNumber, setTableNumber] = useState('');

  return (
    <>
      <Routes>
        <Route path="/" element={<Home tableNumber={tableNumber} setTableNumber={setTableNumber}/>} />
        <Route path="/table/:params" element={<Table tableNumber={tableNumber}/>} />
        <Route path="/table/:params/call" element={<Call/>} />
        <Route path="/table/:params/menu" element={<Menu/>} />
      </Routes>
    </>
  );
}

export default App;
