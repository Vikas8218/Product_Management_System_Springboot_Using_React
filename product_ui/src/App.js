import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home'; 
import AddProduct from './Component/AddProduct';
import EditProduct from './Component/EditProduct';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<AddProduct />} />
        <Route path='/home/editProduct/:id' element={<EditProduct/>} />
      </Routes>
    </>
  );
}

export default App;

