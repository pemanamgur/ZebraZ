import React from 'react'
import Testimonial from '../components/Testimonial'
import HomeImage from '../components/HomeImage'
import HomeTop from '../components/HomeTop'
import IndexPage from '../routes'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <main>
      <IndexPage/>
      <HomeTop />
   <HomeImage />
   <div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Paragraph Column (Left on larger screens) */}
          <div className="order-2 md:order-1 flex justify-center md:justify-end items-center"> {/* Flex properties for horizontal and vertical centering */}
            <p className="text-xl text-gray-800 leading-relaxed text-center md:text-left">
              {/* Centered text vertically and aligned to center (text-center) on mobile, aligned to left (text-left) on medium screens and above */}
              "Formally trained with oil painting technique in 2008, I have adapted to the face paint medium to deliver eye catching variations of popular designs.I consciously use high quality, hypo allergenic products, and am willing to tailor the designs I offer to match the theme of your event. I look forward to bringing joy to you and your guests!"
            </p>
          </div>

          {/* Image Column (Right on larger screens) */}
          <div className="order-1 md:order-2 flex justify-center md:justify-start"> {/* Flex properties for horizontal centering */}
            <img src="https://static.wixstatic.com/media/593ea9_d35c74fd173c41c2abcff30624ec1f5d~mv2.jpg/v1/fill/w_614,h_521,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_E2012_JPG.jpg" alt="Image" className="rounded-lg" />
          </div>

        </div>
      </div>
    </div>
    <Testimonial />
    </main>
   <Footer />
   </>
  )
}

export default Home
