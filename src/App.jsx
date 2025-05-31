import React, { useState } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/Searchbar'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart' // Optional cart component

function App() {
  const [search, setSearch] = useState('');
  const [allFood, setAllFood] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false); // For toggling cart view

  const APP_ID = "b3972793"
  const APP_KEY = "91d4d909be31b7f05b7997fb6f2380b0"

  const fetchFood = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await res.json();
      setAllFood(data.hits);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }


  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  }


  const buyNow = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items first.");
      return;
    }

    const itemNames = cartItems.map((item) => item.recipe.label).join(", ");
    alert(`Purchased: ${itemNames}`);
    setCartItems([]); 
  }

  return (
    <div>
      <Navbar 
        cartCount={cartItems.length} 
        toggleCart={() => setShowCart(!showCart)} 
        buyNow={buyNow} // Pass buyNow to Navbar (optional)
      />
      <SearchBar search={search} setSearch={setSearch} fetchFood={fetchFood} />
      <ProductCard 
        allFood={allFood} 
        loading={loading} 
        addToCart={addToCart} 
      />
      {showCart && <Cart cartItems={cartItems} />}
    </div>
  )
}

export default App
