import { Popover, Transition } from '@headlessui/react'
import { ShoppingBagIcon } from '@heroicons/react/20/solid'
import { Fragment, useContext } from 'react'
import CartContext from '../Context/CartContext'

import CartForm from './CartForm'

function Cart() {

const cartCtx = useContext(CartContext)
const numberofItem = cartCtx.items.length;


  return (


    <>
   {/* Cart */}

   <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-8">
                <Popover.Button className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-red-700 group-hover:text-gray-800">{numberofItem}</span>
                  <span className="sr-only">items in cart, view bag</span>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                            
                  <Popover.Panel className="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                    <CartForm products={cartCtx} />
                  </Popover.Panel>
                
                </Transition>
              </Popover>
            
    </>

  )
}

export default Cart
