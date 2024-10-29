import React from 'react';
import { useSelector } from 'react-redux';
import { products } from '../pets'; 
import { Link } from 'react-router-dom';
 
const Favorites = () => {
    const favorites = useSelector(state => state.cart.favorites);

 
    const favoriteProducts = products.filter(product => favorites.includes(product.id));

    return (
        <div className="favorites-section">
            <h2>Your Favorites</h2>
            <div className="favorites-list"> 
                {favoriteProducts.length > 0 ? (
                    favoriteProducts.map(product => (
                        <div key={product.id} className="favorite-item flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md mt-5">
                            <img src={product.image} alt={product.name} className='w-12' />
                            <h3>{product.name}</h3>
                            <p>${product.price.toFixed(2)}</p>
                        </div>
                    ))
                ) : (
                  <p>No favorites added yet.</p> 
                )} 
            </div>
        </div>
    );
};

export default Favorites;
