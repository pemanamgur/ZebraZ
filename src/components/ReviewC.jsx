import React from 'react'

export default function Review({review}) {
  // console.log(review)
  return (
    <>
    <div>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center  justify-center bg-gray-200 h-48">
        <img src={review.event} alt="Review" className="h-32 rounded-full" />
      </div>
      <div className="p-6">
        <p className="text-gray-800 text-lg">{review.reviewText}</p>
        <p className="text-gray-600 text-sm mt-4">- {review.date}</p>
      </div>
    </div>
    </div>
     

     
    </>
  )
}
