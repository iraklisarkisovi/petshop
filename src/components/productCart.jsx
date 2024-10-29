import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, addToFavorite } from '../stores/cart';  

const ProductCart = (props) => {
    const { id, name, type, price, image, slug, height } = props.data;
    const [isCurrencyInUSD, setIsCurrencyInUSD] = useState(false);
    const dispatch = useDispatch();

    const favorites = useSelector(state => state.cart.favorites);
    const isFavorite = favorites.includes(id); 

    const handleToggleFavorite = () => {
        dispatch(addToFavorite({ productId: id }));  
 
    };

    const handleCurrencyToggle = () => {
        setIsCurrencyInUSD(prevState => !prevState);  
    };

    const handleAddToCart = () => {
        dispatch(addToCart({ productId: id, quantity: 1 })); 
        alert(`${name} added to Cart`)
    };

    const USD = price * 2.72;  

    return (
        <div className='bg-white p-5 rounded-xl shadow-sm'>
            <Link to={slug}>
                <img src={image} alt='' className={`w-${height} h-50 object-cover object-top drop-shadow-[0_10px_30px_#0007]`} />
            </Link>
            <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
            <p className='text-center p-6'>{type}</p>
            <div className='flex justify-between items-center'>
                <p>
                    <span className={`${isCurrencyInUSD ? 'usd' : 'usdNone'}`}>
                        <button onClick={handleCurrencyToggle}>
                            <b>USD {price}</b>
                        </button>
                    </span>
                    <span className={`${isCurrencyInUSD ? 'gelNone' : 'gel'}`}>
                        <button onClick={handleCurrencyToggle}>
                            <b>GEL {Math.round(USD)}</b>
                        </button>
                    </span>
                </p>
                <div>
                    <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2' onClick={handleAddToCart}>
                        <img src={iconCart} alt="" className='w-5' />
                        Add To Cart
                    </button>
                </div>
                <button onClick={handleToggleFavorite}>
                    <img
                        src={isFavorite 
                            ? "https://cdn-icons-png.flaticon.com/512/1077/1077086.png" 
                            : "https://static.vecteezy.com/system/resources/previews/010/158/312/original/heart-icon-sign-symbol-design-free-png.png"}
                        alt="Favorite"
                        className={isFavorite ? 'heart' : 'image'}
                    />
                </button>
            </div>
        </div>
    );
};

export default ProductCart;
