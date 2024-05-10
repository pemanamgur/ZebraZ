import React from 'react'

export default function Review({imageUrl, text, author}) {
  return (
    <>
    <div>
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-center bg-gray-200 h-48">
        <img src={imageUrl} alt="Review" className="h-32 rounded-full" />
      </div>
      <div className="p-6">
        <p className="text-gray-800 text-lg">{text}</p>
        <p className="text-gray-600 text-sm mt-4">- {author}</p>
      </div>
    </div>
    </div>
     

     
    </>
  )
}
