import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './cartItem';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const carts = useSelector(store => store.cart.items);

    return (
        <div className='bg-gray-700 shadow-2xl w-full max-w-3xl mx-auto h-full grid grid-rows-[60px_1fr_60px] p-5'>
            <h2 className='text-white text-2xl mb-4'>Shopping Cart</h2>
            <div className='p-5'>
                {carts.length > 0 ? (
                    carts.map((item, key) => 
                        <CartItem key={key} data={item} />
                    )
                ) : (
                    <div className='text-white text-center'>
                        <p>Your cart is empty</p>
                        <p>
                            Go to the <Link to="/" className='text-blue-400 underline'>Home Page</Link> to add items.
                        </p>
                    </div>
                )}
            </div>
            {carts.length > 0 && (
                <div className='grid grid-cols-2 mt-4 gap-2'>
                    <Link to="/">
                        <button className='bg-black text-white py-2'>CLOSE</button>
                    </Link>
                    <Link to='/checkout'>
                        <button className='bg-blue-600 text-white py-2'>CHECKOUT</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CartPage;
