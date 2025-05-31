import React from 'react';

function Navbar({ cartCount, toggleCart, buyNow, setSearch }) {
  return (
    <div className='main fixed top-0 left-0 w-full z-50 lg:flex md:flex flex-wrap justify-between items-center px-6 bg-black bg-opacity-80 backdrop-blur-md py-5 shadow-lg'>
      <div className="left">
        <div className="logo font-bold text-3xl text-blue-400 text-center">Food App</div>
      </div>
      <div className="right">
        <ul className='flex space-x-6 text-white justify-center items-center text-lg'>
          <li className='cursor-pointer font-bold flex items-center space-x-2' onClick={toggleCart}>
            <span role="img" aria-label="cart" style={{ fontSize: '1.5rem' }}>🛒</span>
            {cartCount > 0 && <span>item - {cartCount}</span>}
          </li>
          <li
            className='cursor-pointer bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold'
            onClick={buyNow}
          >
            Buy All
          </li>
          <li
            className='cursor-pointer bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold'
            onClick={() => setSearch('')}
          >
            Clear
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
