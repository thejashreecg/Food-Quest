import React, { useState } from 'react';

function ProductCard({ allFood, loading, addToCart, buyNow }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <>
      {loading ? (
        <div className='flex justify-center'>
          <img className='w-16 py-20' src="https://i.gifer.com/ZZ5H.gif" alt="Loading" />
        </div>
      ) : (
        <div className='flex flex-wrap px-4 lg:px-10'>
          {allFood.map((item, index) => {
            const { image, label, calories, dishType, cuisineType, ingredientLines } = item.recipe;
            return (
              <div className="p-2 md:w-1/4 w-full" key={index}>
                <div className="bg-[#F8EFBA] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
                  <img className='rounded-lg w-full mb-2' src={image} alt={label} />
                  <h2 className='text-xl text-black font-bold'>
                    {label.length > 25 ? `${label.slice(0, 25)}...` : label}
                  </h2>
                  <h2 className='text-lg text-black'><span className="font-bold">Calories:</span> {Math.round(calories)}</h2>
                  <h2 className='text-lg text-black'><span className='font-bold'>DishType:</span> {dishType}</h2>
                  <h2 className='text-lg text-black mb-2'><span className='font-bold'>CuisineType:</span> {cuisineType}</h2>
                  <div className="flex space-x-2 justify-between mb-2">
                    <button className='bg-[#706fd3] px-3 py-1.5 text-white rounded-lg' onClick={() => addToCart(item)}>Add</button>
                    <button className='bg-[#ff4757] px-3 py-1.5 text-white rounded-lg' onClick={() => buyNow(item)}>Buy</button>
                    <button className='bg-green-600 px-3 py-1.5 text-white rounded-lg' onClick={() => setSelectedRecipe(item.recipe)}>View</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-11/12 md:w-1/2 lg:w-1/3 shadow-lg relative">
            <button className="absolute top-2 right-4 text-red-600 text-xl" onClick={() => setSelectedRecipe(null)}>×</button>
            <h2 className="text-2xl font-bold mb-2">{selectedRecipe.label}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.label} className="w-full rounded-lg mb-3" />
            <h3 className="font-semibold text-lg mb-1">Ingredients:</h3>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              {selectedRecipe.ingredientLines.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
