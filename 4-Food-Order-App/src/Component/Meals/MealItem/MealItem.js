import React from 'react'
import clasees from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import { useContext } from 'react'
import CartContext from '../../../Store/CartContext'


export default function MealItem({id, name, price, image, description}) {
    const cartCxt = useContext(CartContext)
    // const price = `$${props.price}`;

 


    const addToCartHandler = (amount) => {
        cartCxt.addItem({
            id: id,
            name: name,
            amount: amount,
            price: price,
            image : image
          });
            
    }
  return (
        <li  className={clasees.meal}>
            <div className={clasees.divClass} >
                <div>
                      <img style={{width : "500px"}}src={image} alt="Rac" />
                </div>
                <h3 >{name}</h3>
                <div className={clasees.description}>{description}</div>
                <div className={clasees.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={id} onAddToCart = {addToCartHandler} />
            </div>
        </li>
  )
}
