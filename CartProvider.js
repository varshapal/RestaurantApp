import React, { useState } from 'react';
import CartContext from './cart-context';


const CartProvider = (props) => {
    const [items, updateItems] = useState([])
    const addItemToCartHandler = (item) => {
        updateItems([...items, item])
        //cartContext.items.push(item)
        //items.push(item)
        //cartContext.addItem(props.item)
        console.log('inside addItemToCartHandler', cartContext)
    };

    const removeItemFromCartHandler = id => {};

    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };
    return <CartContext.Provider value={cartContext}>
        {console.log('Inside CartContext.Provider', cartContext)}
        {props.children}
    </CartContext.Provider>
};


export default CartProvider;