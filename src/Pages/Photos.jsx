import React from 'react'

function Photos() {

 const images = [
  {
    imageUrl : "https://static.wixstatic.com/media/593ea9_7512d27db70d4837952d07edf44e6f30~mv2.jpg/v1/crop/x_0,y_338,w_1364,h_1747/fill/w_419,h_537,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PhotoRoom_20230314_154625.jpg"
  },
  {
    imageUrl : "https://static.wixstatic.com/media/593ea9_7512d27db70d4837952d07edf44e6f30~mv2.jpg/v1/crop/x_0,y_338,w_1364,h_1747/fill/w_419,h_537,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PhotoRoom_20230314_154625.jpg"
  },
  {
    imageUrl : "https://static.wixstatic.com/media/593ea9_7512d27db70d4837952d07edf44e6f30~mv2.jpg/v1/crop/x_0,y_338,w_1364,h_1747/fill/w_419,h_537,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PhotoRoom_20230314_154625.jpg"
  },
  {
    imageUrl : "https://static.wixstatic.com/media/593ea9_7512d27db70d4837952d07edf44e6f30~mv2.jpg/v1/crop/x_0,y_338,w_1364,h_1747/fill/w_419,h_537,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PhotoRoom_20230314_154625.jpg"
  },
  {
    imageUrl : "https://static.wixstatic.com/media/593ea9_7512d27db70d4837952d07edf44e6f30~mv2.jpg/v1/crop/x_0,y_338,w_1364,h_1747/fill/w_419,h_537,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PhotoRoom_20230314_154625.jpg"
  },
  {
    imageUrl : "https://static.wixstatic.com/media/593ea9_7512d27db70d4837952d07edf44e6f30~mv2.jpg/v1/crop/x_0,y_338,w_1364,h_1747/fill/w_419,h_537,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PhotoRoom_20230314_154625.jpg"
  },
  {
    imageUrl : "https://static.wixstatic.com/media/593ea9_7512d27db70d4837952d07edf44e6f30~mv2.jpg/v1/crop/x_0,y_338,w_1364,h_1747/fill/w_419,h_537,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PhotoRoom_20230314_154625.jpg"
  },
  {
    imageUrl : "https://static.wixstatic.com/media/593ea9_7512d27db70d4837952d07edf44e6f30~mv2.jpg/v1/crop/x_0,y_338,w_1364,h_1747/fill/w_419,h_537,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PhotoRoom_20230314_154625.jpg"
  },
  {
    imageUrl : "https://static.wixstatic.com/media/593ea9_7512d27db70d4837952d07edf44e6f30~mv2.jpg/v1/crop/x_0,y_338,w_1364,h_1747/fill/w_419,h_537,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PhotoRoom_20230314_154625.jpg"
  },
 ]

  return (
  


    <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((imageUrl, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <img src={imageUrl.imageUrl} alt={`Image ${index + 1}`} className="w-full h-auto" />
        </div>
      ))}
    </div>
  </div>
 
  )
}

export default Photos
