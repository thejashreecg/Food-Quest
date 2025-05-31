function Navbar({ cartCount, toggleCart, buyNow }) {
  return (
    <div className='main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#F8EFBA] py-4 shadow-md'>
      <div className="left">
        <div className="logo font-bold text-2xl text-black text-center">Food App</div>
      </div>
      <div className="right">
        <ul className='flex space-x-4 text-black justify-center items-center'>
         
          <li className='cursor-pointer font-bold' onClick={toggleCart}>Cart ({cartCount})</li>
          <li className='cursor-pointer bg-[#ff6b6b] px-3 py-1 text-white rounded' onClick={buyNow}>Buy All</li>
        </ul>
      </div>      
    </div>
  )
}

export default Navbar 