import React from 'react'
import IndexPage from '../routes'
import Footer from '../components/Footer'

function Photos() {

 const images = [
  {
    imageUrl : "https://static.wixstatic.com/media/593ea9_e07eb5363ce84ed39054a7d12f3bfe06~mv2.png/v1/fill/w_354,h_443,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/593ea9_e07eb5363ce84ed39054a7d12f3bfe06~mv2.png"
  },
  {
    imageUrl : "https://static.wixstatic.com/media/593ea9_4cd3ccd9b1644dc99e81b573fd63476d~mv2_d_2048_2048_s_2.jpeg/v1/fill/w_364,h_364,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/593ea9_4cd3ccd9b1644dc99e81b573fd63476d~mv2_d_2048_2048_s_2.jpeg"
  },
  {
    imageUrl : "https://static.wixstatic.com/media/593ea9_1cf369dd585747ab98f2c037de9c9e32~mv2.png/v1/fill/w_341,h_448,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/593ea9_1cf369dd585747ab98f2c037de9c9e32~mv2.png"
  },
  {
    imageUrl : "https://static.wixstatic.com/media/593ea9_be8030817320482eaeaee736ba70fad0~mv2.png/v1/fill/w_343,h_431,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/593ea9_be8030817320482eaeaee736ba70fad0~mv2.png"
  },
  {
    imageUrl : "https://static.wixstatic.com/media/593ea9_6395069d47844972953e1ee94e290aff~mv2.png/v1/fill/w_398,h_458,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/593ea9_6395069d47844972953e1ee94e290aff~mv2.png"
  },
  {
    imageUrl : "https://static.wixstatic.com/media/593ea9_c2425ad2b881472cac5df4a60758fe79~mv2.png/v1/fill/w_346,h_455,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/593ea9_c2425ad2b881472cac5df4a60758fe79~mv2.png"
  },
  {
    imageUrl : "https://static.wixstatic.com/media/593ea9_107c1f33b470420ba2ec22b3b4002845~mv2.png/v1/fill/w_350,h_458,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/593ea9_107c1f33b470420ba2ec22b3b4002845~mv2.png"
  },
  {
    imageUrl : "https://static.wixstatic.com/media/593ea9_68b2824c3c0a45cea62f3d19e85d9810~mv2.png/v1/crop/x_0,y_740,w_1238,h_1468/fill/w_344,h_408,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/593ea9_68b2824c3c0a45cea62f3d19e85d9810~mv2.png"
  },
  {
    imageUrl : "https://static.wixstatic.com/media/593ea9_87b018ef4194402394139d3efea2d812~mv2.png/v1/fill/w_340,h_448,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/593ea9_87b018ef4194402394139d3efea2d812~mv2.png"
  },
 ]

  return (
  <>
  <IndexPage />
 


    <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
      {images.map((imageUrl, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <img src={imageUrl.imageUrl} alt={`Image ${index + 1}`} className=" w-full h-full" />
        </div>
      ))}
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default Photos
