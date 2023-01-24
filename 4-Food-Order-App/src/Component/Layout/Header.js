
import {React, Fragment} from 'react'

import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

function Header(props) {
  return (
    <Fragment> <div className="bg-indigo-50">
    <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-10 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
        <span className="block text-indigo-600">Home Meals</span>
      
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
        <HeaderCartButton onClick={props.isShowCart} ></HeaderCartButton>
       
        </div>
      </div>
    </div>
  </div>
        {/* <header className={classes.header}>
            <h1 >Home Meals</h1>
            <HeaderCartButton onClick={props.isShowCart} ></HeaderCartButton>
        </header>  */}
      
        <div className={classes['main-image']}>
          
        </div>
    </Fragment>
  )
}

export default Header
