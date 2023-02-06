import React, { useReducer } from 'react'
import CartContext from './CartContext'
const defaultCartState = {
    items: [],
    totalamount: 0,
    orderTotal : 0,
    totalTax : 0
  };
  
  const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
    let updatedTotalAmount = state.totalamount + action.item.price;
    const totaltax = state.totalTax +  action.item.tax;
    const orderTotal = updatedTotalAmount + totaltax;



      let updatedItems;
        updatedItems = state.items.concat(action.item);
      return {
        items: updatedItems,
        totalamount : updatedTotalAmount,
        orderTotal : orderTotal,
        totalTax : totaltax
      };
    }
  }

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
      dispatchCartAction({type: 'ADD', item: item});
    };
  
    // const removeItemFromCartHandler = (id) => {
    //   dispatchCartAction({type: 'REMOVE', id: id});
    // };
  

    const cartContext = {
        items :cartState.items,
        totalamount : cartState.totalamount,
        orderTotal : cartState.orderTotal,
        totalTax : cartState.totalTax,
        addItem: addItemToCartHandler,
        // removeItem :removeItemFromCartHandler


    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
    
}

export default CartProvider
