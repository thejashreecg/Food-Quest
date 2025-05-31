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
                <div className="bg-black bg-opacity-70 p-4 rounded-2xl shadow-lg hover:-translate-y-1 border border-blue-600 transition-transform duration-300">
                  <img className='rounded-lg w-full mb-2' src={image} alt={label} />
                  <h2 className='text-xl font-bold text-blue-300'>
                    {label.length > 25 ? `${label.slice(0, 25)}...` : label}
                  </h2>
                  <h2 className='text-lg text-white'><span className="font-bold">Calories:</span> {Math.round(calories)}</h2>
                  <h2 className='text-lg text-white'><span className='font-bold'>DishType:</span> {dishType}</h2>
                  <h2 className='text-lg text-white mb-2'><span className='font-bold'>CuisineType:</span> {cuisineType}</h2>
                  <div className="flex space-x-3">
                    <button
                      className='bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold w-28'
                      onClick={() => addToCart(item)}
                    >
                      Add
                    </button>
                    <button
                      className='bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold w-28'
                      onClick={() => buyNow(item)}
                    >
                      Buy
                    </button>
                    <button
                      className='bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white font-semibold w-28'
                      onClick={() => setSelectedRecipe(item.recipe)}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 p-4
          bg-black bg-opacity-70 backdrop-blur-md"
        >
          <div
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg
            border border-white border-opacity-30 rounded-3xl p-6
            max-w-lg w-full max-h-[80vh] overflow-y-auto
            shadow-xl text-white relative"
            style={{
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              WebkitBackdropFilter: 'blur(12px)',
              backdropFilter: 'blur(12px)',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.18)',
            }}
          >
            <button
              className="absolute top-4 right-5 text-white text-4xl font-bold hover:text-red-500 transition-colors"
              onClick={() => setSelectedRecipe(null)}
              aria-label="Close Modal"
            >
              ×
            </button>
            <h2 className="text-3xl font-extrabold mb-6 text-blue-300">{selectedRecipe.label}</h2>
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.label}
              className="w-full rounded-2xl mb-6 shadow-lg"
            />
            <h3 className="text-xl font-semibold mb-3">Ingredients:</h3>
            <ul className="list-disc list-inside space-y-1 text-white max-h-48 overflow-y-auto">
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
