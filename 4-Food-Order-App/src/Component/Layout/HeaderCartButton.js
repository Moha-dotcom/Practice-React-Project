import React, { Fragment } from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useContext } from 'react'
import CartContext from '../../Store/CartContext'
function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.items)
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <Fragment>
        <button  className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"  onClick={props.onClick}>
          <span className={classes.icon}><CartIcon /></span>
          <span>Your Cart</span>
          <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    </Fragment>
  )
}


export default HeaderCartButton
