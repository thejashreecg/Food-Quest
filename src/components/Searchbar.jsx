import React from 'react'

function SearchBar({ search, setSearch, fetchFood }) {
  return (
    <div className="input flex justify-center mt-10 mb-7 px-5 lg:px-0">
      <input
        type="text"
        value={search}
        placeholder='Search your food'
        onChange={(e) => setSearch(e.target.value)}
        className='shadow-md bg-gray-200 placeholder-gray-500 rounded-l-lg px-2 py-2 w-80 outline-none border-2 border-gray-600' />
      <button
        onClick={fetchFood}
        className='bg-[#F8EFBA] px-4 rounded-r-lg text-black shadow-md border-b-2 border-r-2 border-t-2 border-gray-600'>
        Search
      </button>
    </div>
  )
}

export default SearchBar