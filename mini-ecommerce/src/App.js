
import './App.css';
import NavBar from '../src/Component/Header/NavBar'
import Product from '../src/Component/Product/Product'
import CartProvider from './Component/Context/CartProvider'
import Cart from './Component/Cart/Cart';





function App() {

  return (
      <CartProvider>
        <NavBar />
        <div>
        <Product />
        </div>

      </CartProvider>
    
       
  
     
  );
}

export default App;
