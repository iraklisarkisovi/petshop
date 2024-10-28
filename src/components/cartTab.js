// import React from 'react' 
// import { useSelector, useDispatch } from 'react-redux' 
// import CartItem from './cartItem';
// import { toggleStatusTab } from '../stores/cart';

// const CartTab = () => {
//     const carts = useSelector(store => store.cart.items);
//     const dispatch = useDispatch();

//     const handleCloseTabCart = () => {
//         dispatch(toggleStatusTab());
//     }

//     return (
//         <div className='bg-gray-700 shadow-2xl w-full max-w-3xl mx-auto h-full grid grid-rows-[60px_1fr_60px] p-5'>
//             <h2 className='text-white text-2xl'>Shopping Cart</h2>
//             <div className='p-5'>
//                 {carts.map((item, key) => 
//                     <CartItem key={key} data={item}/>
//                 )}
//             </div>
//             <div className='grid grid-cols-2'>
//                 <button className='bg-black text-white' onClick={handleCloseTabCart}>CLOSE</button>
//                 <button className='bg-blue-600 text-white'>CHECKOUT</button>
//             </div>
//         </div>
//     )
// }

// export default CartTab;
