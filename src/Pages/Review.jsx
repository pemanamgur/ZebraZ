import React from 'react'
import ReviewC from '../components/ReviewC'
import IndexPage from '../routes'
import Footer from '../components/Footer'


function Review() {
  const reviews = [
    {
      event: "Church Picnic 08/27/2023",
      location: "Chicago, IL",
      date: "August 27, 2023",
      reviewText:
        "Absolutely amazing! Sean is so personable, professional and all around nice person. He interacted well with everyone at the picnic. Arrived on time and was set up to begin making his wonderful creations for all who wanted one including me! Everyone was amazed at the variety of balloon creations he did. Bottom line. He was a hit at the picnic! They want him back next year and God willing if he is available we will definitely reach out. Zebra Zordan's Balloons is definitely an asset to The Bash!",
      author: "A.R.",
    },
    {
      event: "Birthday party 6/19/2023",
      location: "Unknown",
      date: "June 19, 2023",
      reviewText: "A wonderful experience and numerous balloon designs to choose from. Very talented.",
      author: "B.C.",
    },
    {
      event: "Birthday party  6/10/2023",
      location: "Unknown",
      date: "June 19, 2023",
      reviewText: "He was right on time, ready to go and make some creative balloons for the kids.  He was great .He was right on time, ready to go and made some creative balloons for the kids. He was great!",
      author: "-C.J.",

    },
    {
      event: "Birthday party 6/10/2023",
      location: "Unknown",
      date: "June 10, 2023",
      reviewText:
        "Great Experience! He was right on time, ready to go and make some creative balloons for the kids. He was great.",
      author: "C.J.",
    },
    {
      event: "Christmas event for company event 12/2/22",
      location: "Unknown",
      date: "December 2, 2022",
      reviewText: "Very professional and rates are fair.",
      author: "A.M.",
    },
    {
      event: "Dental Practice company party at bowling alley 10/23/22",
      location: "Unknown",
      date: "October 23, 2022",
      reviewText:
        "We were really impressed by the level of balloons and the face painting. Definitely will recommend to others and we will use Zebra Zordan again.",
      author: "Kim",
    },
    {
      event: "Library event for Palos Park Public Library 8/6/22",
      location: "Unknown",
      date: "August 6, 2022",
      reviewText:
        "Zebra Zordan balloons was an excellent addition to our event. The children loved all the unique balloons. There was an unexpected incident that threw off the timing of our event a bit, but he worked with us to make sure the children at the event were happy and satisfied! Super creative balloons and a very professional service.",
      author: "Emily",
    },
    {
      event: "Prosthetics company picnic 7/16/22",
      location: "Unknown",
      date: "July 16, 2022",
      reviewText:
        "Excellent! Our Patient Family, kids and adults, all lined up right away for balloons. The balloons were incredible, and so original. Zebra was very well prepared with so many colorful options and designs. Everyone seemed thrilled with what was made for them...a robot, a cactus, a baby elephant, and so many more. We hope he will be available for us again next year. The employees of David Rotter Prosthetics, Ltd. and participants of the Annual Patient Family Picnic appreciate the time he spent with us.",
      author: "P.R.K.",
    },
    {
      event: "Birthday Party for Erna G. 7/16/22, 'Cars' theme",
      location: "Unknown",
      date: "July 16, 2022",
      reviewText:
        "Everyone at our party, including kids AND adults, were satisfied with their balloon creations. The 'special' piece that he brought for the birthday girl was amazing too! Absolutely recommend.",
      author: "Unknown",
    },
    {
      event: "Birthday party for Jacquelyn V. 5/21/22",
      location: "Unknown",
      date: "May 21, 2022",
      reviewText:
        "We had Zebra Zordan as a balloon twister at my child's 5th birthday and his work was amazing. Upon request of Sally from Nightmare Before Christmas he googled her and nailed it. I was so impressed with his work and rapport with the kids. I will definitely use him again.",
      author: "Unknown",
    },
    {
      event: "National Tuba day for marching band Mucca Pazza 5/6/22",
      location: "Unknown",
      date: "May 6, 2022",
      reviewText: "A real pleasure to work with- would definitely use again. Thank you Sean!",
      author: "Unknown",
    },
    {
      event: "Birthday party for Christine D. 3/13/22",
      location: "Unknown",
      date: "March 13, 2022",
      reviewText:
        "Awesome Talent! It was my toddler boys birthday and the theme was race cars. He made intricate cars beforehand as a gift for both! Such amazing talent. The whole event he has a line of kids and each one of them was happy! Will definitely book again!",
      author: "Unknown",
    },
    {
      event: "Birthday party for Elizabeth S. 2/12/22, pirate theme",
      location: "Unknown",
      date: "February 12, 2022",
      reviewText:
        "The kids had a blast, and everyone",
    }
    // Add more reviews here as needed
  ];
  return (
<>
<IndexPage />
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="max-w-4xl w-full p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ReviewC
            imageUrl="https://picsum.photos/150"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum elit non ligula molestie."
            author="John Doe"
          />
          <ReviewC
            imageUrl="https://picsum.photos/150"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum elit non ligula molestie."
            author="Jane Smith"
          />
        </div>
      </div>
    </div>

        <div className="flex justify-center items-center min-h-screen bg-gray-300">
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Customer Reviews and Feedback</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((review, index) => (
          <div key={index} className=" bg-gray-400 rounded-lg overflow-hidden shadow-md">
            <div className="p-6">
              <p className="italic text-sm text-gray-600 mb-2">
                <strong>{review.event}</strong> - Reviewed on {review.date} - From {review.location}
              </p>
              <p className="text-base text-gray-800 mb-4">{review.reviewText}</p>
              <p className="text-sm font-semibold text-gray-700">-{review.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  
      
    </div>
<Footer />
</>
  )
}

export default Review
