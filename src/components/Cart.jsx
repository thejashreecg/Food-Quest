function Cart({ cartItems }) {
  return (
    <div className='p-4 bg-white shadow-lg rounded-md m-4'>
      <h2 className='text-xl font-bold mb-4'>🛒 Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className='mb-2 border-b pb-2'>
              <strong>{item.recipe.label}</strong> - {Math.round(item.recipe.calories)} cal
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart