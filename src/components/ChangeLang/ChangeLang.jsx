import React from 'react'

const ChangeLang = () => {
  return (
   <>
    <select
        id="small"
        className="block w-[99px] max-[400px]:w-[70px] p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white"
      >
        <option selected disabled>🌐</option>
        <option value="uz">UZ</option>
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
      </>
  )
}

export default ChangeLang