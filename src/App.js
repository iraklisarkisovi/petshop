import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Detail from './pages/detail';
import Favorites from './pages/Favorites';
import { Provider } from 'react-redux';
import { store } from './stores'; // 
import CartPage from './pages/cartPage';
import Checkout from './pages/checkOut';
import After from './pages/afterCheckOut';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/after" element={<After />} />
                        <Route path="/:slug" element={<Detail />} />
                    </Routes>
                </Layout>
            </Router>
        </Provider>
    );
};

export default App;
