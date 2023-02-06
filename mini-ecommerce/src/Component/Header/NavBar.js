import React from 'react'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Cart from '../Cart/Cart'



const navigation = [  { name: 'Shoes', href: '#' },
]



export default function NavBar() {
  return (
    <header className="relative bg-white">
      <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative border-b border-gray-200 px-4 pb-14 sm:static sm:px-0 sm:pb-0">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex flex-1">
              <a href="#1">
                <span className="sr-only">Your Company</span>
               
              </a>
            </div>

            <div className="absolute inset-x-0 bottom-0 overflow-x-auto border-t sm:static sm:border-t-0">
              <div className="flex h-14 items-center space-x-8 px-4 sm:h-auto">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end">
              {/* Search */}
              <a href="#1" className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
              </a>

            </div> 
            <Cart />
           
          </div>
        </div>
      </nav>
    </header>
  )
}


