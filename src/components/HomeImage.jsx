import React from 'react'

function HomeImage() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Image Column (Left on larger screens) */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start"> {/* Added flex properties */}
            <img src="https://static.wixstatic.com/media/593ea9_6d707de105c44526b81901c299d8d603~mv2.jpeg/v1/fill/w_351,h_477,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/593ea9_6d707de105c44526b81901c299d8d603~mv2.jpeg" alt="Image" className="rounded-lg" />
          </div>

          {/* Paragraph Column (Right on larger screens) */}
          <div className="order-1 md:order-2 flex flex-col justify-center"> {/* Added flex properties */}
            <p className="text-lg text-gray-800 leading-relaxed text-center md:text-left"> {/* Centered text vertically and aligned to center (text-center) on mobile, aligned to left (text-left) on medium screens and above */}
             " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum elit non ligula
              molestie, vel aliquet urna ultrices. Sed nec nisi ut arcu eleifend consequat."
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomeImage
