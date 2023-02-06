import React from 'react'


const  CartContext = React.createContext({
    items: [],
    totalamount : 0,
    orderTotal : 0,
    totalTax : 0,
    addItems: (item) => {},
    removeItem : (id) => {

    }
})

export default CartContext
