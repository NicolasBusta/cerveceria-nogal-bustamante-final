import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/cart/Cart';
import { CartProvider } from './context/CartContext';
import Footer from './components/footer/Footer';

function App() {
    return (
        <>
            <CartProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route
                            path="/category/:categoryId"
                            element={<ItemListContainer />}
                        />
                        <Route
                            path="/item/:id"
                            element={<ItemDetailContainer />}
                        />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </CartProvider>
        </>
    );
}

export default App;
