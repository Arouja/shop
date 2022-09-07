import React from 'react';
/*import data from './data';*/
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import OrderScreen from './screens/OrderScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

function App() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
}
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
}
  return (
 
    <BrowserRouter>
    <div className="grid-container">
    
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                    &#9776;
                      </button>
                <Link to="/">My Shop</Link>   
            
                </div>
                <div className="header-links">
                    <a href="cart.html">Cart</a>
                    {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
                <Link to="/signin">Sign In</Link>
                )}
                </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                        <a href="index.html">Denim</a>
                    </li>
                    <li>
                        <a href="index.html">T-shirts</a>
                    </li>
                    <li>
                        <a href="index.html">Dresses</a>
                    </li>
                </ul>
            </aside>
            <main className="main">
                
                <div className="content">
                   
                   <Routes>
                   <Route path="/orders" element={<OrderScreen/>} />
                   <Route path="/order/:id" element={<OrderScreen/>} />
                   <Route path="/payment" element={<PaymentScreen/>}/>
                   <Route path="/shipping" element={<ShippingScreen/>}/>
                   <Route path="/placeorder" element={<PlaceOrderScreen/>} />
                   <Route path="/profile" element={<ProfileScreen/>}/>
                   <Route path="/register" element={<RegisterScreen/>}/>
                   <Route path="/signin" element={<SigninScreen/>}/>
                   <Route path="/products" element={<ProductsScreen/>}/>
                     <Route path="/product/:id" element={<ProductScreen/>}/>
                     <Route path="/cart/:id?" element={<CartScreen/>}/>
                    {/* <Route path="/category/:id" element={<HomeScreen/>}/> */}
                     <Route path="/" exact={true} element={<HomeScreen/>}/>
                    </Routes>
                </div>
                

            </main>
            <footer className="footer">
                © 2022 My Shop
            </footer>
            
        </div>
        </BrowserRouter>
   
  );
}

export default App;
