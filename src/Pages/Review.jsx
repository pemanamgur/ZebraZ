import React from 'react'
import ReviewC from '../components/ReviewC'
import IndexPage from '../routes'
import Footer from '../components/Footer'


function Review() {
  const reviews = [
    {
      event: "https://static.wixstatic.com/media/593ea9_d66abce0b75c4c09a84243b2967122b3~mv2.png/v1/crop/x_0,y_0,w_1238,h_2076/fill/w_394,h_660,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/593ea9_d66abce0b75c4c09a84243b2967122b3~mv2.png",
      location: "Chicago, IL",
      date: "August 27, 2023",
      reviewText:
        "Absolutely amazing! Sean is so personable, professional and all around nice person. He interacted well with everyone at the picnic. Arrived on time and was set up to begin making his wonderful creations for all who wanted one including me! Everyone was amazed at the variety of balloon creations he did. Bottom line. He was a hit at the picnic! They want him back next year and God willing if he is available we will definitely reach out. Zebra Zordan's Balloons is definitely an asset to The Bash!",
      author: "A.R.",
    },
    {
      event: "https://static.wixstatic.com/media/593ea9_cb1a267facdf46f482719bb4c01ba50d~mv2.jpeg/v1/fill/w_374,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/164EECDA-2F2D-4F30-81E5-ACD4F73BD0E4.jpeg",
      location: "Unknown",
      date: "June 19, 2023",
      reviewText: "A wonderful experience and numerous balloon designs to choose from. Very talented.",
      author: "B.C.",
    },
    {
      event: "https://static.wixstatic.com/media/593ea9_58d3cab1963549118d80c6c6a4fc0dd0~mv2.png/v1/fill/w_320,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PhotoRoom_20230110_184014.png",
      location: "Unknown",
      date: "June 19, 2023",
      reviewText: "He was right on time, ready to go and make some creative balloons for the kids.  He was great .He was right on time, ready to go and made some creative balloons for the kids. He was great!",
      author: "-C.J.",

    },
    {
      event: "https://static.wixstatic.com/media/593ea9_0b9a509006f1486baf660e62a0e7075b~mv2.png/v1/fill/w_391,h_534,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_6344.png",
      location: "Unknown",
      date: "June 10, 2023",
      reviewText:
        "Great Experience! He was right on time, ready to go and make some creative balloons for the kids. He was great.",
      author: "C.J.",
    },
    {
      event: "https://static.wixstatic.com/media/593ea9_87b018ef4194402394139d3efea2d812~mv2.png/v1/fill/w_340,h_448,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/593ea9_87b018ef4194402394139d3efea2d812~mv2.png",
      location: "Unknown",
      date: "December 2, 2022",
      reviewText: "Very professional and rates are fair.",
      author: "A.M.",
    },
    {
      event: "https://static.wixstatic.com/media/593ea9_1e160c9313624be1bbc0ad530c7be4f9~mv2.png/v1/fill/w_325,h_406,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/593ea9_1e160c9313624be1bbc0ad530c7be4f9~mv2.png",
      location: "Unknown",
      date: "October 23, 2022",
      reviewText:
        "We were really impressed by the level of balloons and the face painting. Definitely will recommend to others and we will use Zebra Zordan again.",
      author: "Kim",
    },
    {
      event: "https://static.wixstatic.com/media/593ea9_3a31a4fe85c54f6baf9202a759a6d147~mv2.png/v1/fill/w_356,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_6335.png",
      location: "Unknown",
      date: "August 6, 2022",
      reviewText:
        "Zebra Zordan balloons was an excellent addition to our event. The children loved all the unique balloons. There was an unexpected incident that threw off the timing of our event a bit, but he worked with us to make sure the children at the event were happy and satisfied! Super creative balloons and a very professional service.",
      author: "Emily",
    },
    {
      event: "https://static.wixstatic.com/media/593ea9_ca12b6d4bd7d49999fd7cc2d43fe6941~mv2.jpg/v1/fill/w_351,h_351,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/593ea9_ca12b6d4bd7d49999fd7cc2d43fe6941~mv2.jpg",
      location: "Unknown",
      date: "July 16, 2022",
      reviewText:
        "Excellent! Our Patient Family, kids and adults, all lined up right away for balloons. The balloons were incredible, and so original. Zebra was very well prepared with so many colorful options and designs. Everyone seemed thrilled with what was made for them...a robot, a cactus, a baby elephant, and so many more. We hope he will be available for us again next year. The employees of David Rotter Prosthetics, Ltd. and participants of the Annual Patient Family Picnic appreciate the time he spent with us.",
      author: "P.R.K.",
    },
    {
      event: "https://static.wixstatic.com/media/593ea9_e07eb5363ce84ed39054a7d12f3bfe06~mv2.png/v1/fill/w_354,h_443,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/593ea9_e07eb5363ce84ed39054a7d12f3bfe06~mv2.png",
      location: "Unknown",
      date: "July 16, 2022",
      reviewText:
        "Everyone at our party, including kids AND adults, were satisfied with their balloon creations. The 'special' piece that he brought for the birthday girl was amazing too! Absolutely recommend.",
      author: "Unknown",
    },
    {
      event: "https://static.wixstatic.com/media/593ea9_93e0414373dc4e7d8d845291da80ada3~mv2.png/v1/fill/w_343,h_455,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/593ea9_93e0414373dc4e7d8d845291da80ada3~mv2.png",
      location: "Unknown",
      date: "May 21, 2022",
      reviewText:
        "We had Zebra Zordan as a balloon twister at my child's 5th birthday and his work was amazing. Upon request of Sally from Nightmare Before Christmas he googled her and nailed it. I was so impressed with his work and rapport with the kids. I will definitely use him again.",
      author: "Unknown",
    },
    {
      event: "https://static.wixstatic.com/media/593ea9_1cf369dd585747ab98f2c037de9c9e32~mv2.png/v1/fill/w_341,h_448,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/593ea9_1cf369dd585747ab98f2c037de9c9e32~mv2.png",
      location: "Unknown",
      date: "May 6, 2022",
      reviewText: "A real pleasure to work with- would definitely use again. Thank you Sean!",
      author: "Unknown",
    },
    {
      event: "https://static.wixstatic.com/media/593ea9_6395069d47844972953e1ee94e290aff~mv2.png/v1/fill/w_398,h_458,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/593ea9_6395069d47844972953e1ee94e290aff~mv2.png",
      location: "Unknown",
      date: "March 13, 2022",
      reviewText:
        "Awesome Talent! It was my toddler boys birthday and the theme was race cars. He made intricate cars beforehand as a gift for both! Such amazing talent. The whole event he has a line of kids and each one of them was happy! Will definitely book again!",
      author: "Unknown",
    },
    {
      event: "https://static.wixstatic.com/media/593ea9_c2425ad2b881472cac5df4a60758fe79~mv2.png/v1/fill/w_346,h_455,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/593ea9_c2425ad2b881472cac5df4a60758fe79~mv2.png",
      location: "Unknown",
      date: "February 12, 2022",
      reviewText:
        "The kids had a blast, and everyone",
    },
  ];
  return (
<>
<IndexPage />
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full  p-4 md:p-8">
        <div className="grid grid-cols-1 gap-8">
        
          {
            reviews.map((review,index)=>(
              <ReviewC  review={review} />
            ) )
          }

        </div>
      </div>
    </div>

        {/* <div className="flex justify-center items-center min-h-screen bg-white">
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Customer Reviews and Feedback</h2>
      <div className="grid gap-10 m-4 md:grid-cols-2">
        {reviews.map((review, index) => (
          <div key={index} className=" bg-gray-200 rounded-lg overflow-hidden shadow-md">
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
  
      
    </div> */}
<Footer />
</>
  )
}

export default Review
