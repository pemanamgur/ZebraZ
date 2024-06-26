import React from 'react'
import IndexPage from '../routes'
import Footer from '../components/Footer'

function Videos() {


  const videos = [
    {
      videoUrl : "https://www.youtube.com/embed/3aUYblpW1z8?si=pq_Rh5rUQqx1kBSF"
    },
    {
      videoUrl : "https://www.youtube.com/embed/3aUYblpW1z8?si=pq_Rh5rUQqx1kBSF"
    },
    {
      videoUrl : "https://www.youtube.com/embed/3aUYblpW1z8?si=pq_Rh5rUQqx1kBSF"
    },
    {
      videoUrl : "https://www.youtube.com/embed/3aUYblpW1z8?si=pq_Rh5rUQqx1kBSF"
    },
    {
      videoUrl : "https://www.youtube.com/embed/3aUYblpW1z8?si=pq_Rh5rUQqx1kBSF"
    },
    {
      videoUrl : "https://www.youtube.com/embed/3aUYblpW1z8?si=pq_Rh5rUQqx1kBSF"
    },
    {
      videoUrl : "https://www.youtube.com/embed/3aUYblpW1z8?si=pq_Rh5rUQqx1kBSF"
    },
    {
      videoUrl : "https://www.youtube.com/embed/3aUYblpW1z8?si=pq_Rh5rUQqx1kBSF"
    },
    {
      videoUrl : "https://www.youtube.com/embed/3aUYblpW1z8?si=pq_Rh5rUQqx1kBSF"
    },
    {
      videoUrl : "https://www.youtube.com/embed/3aUYblpW1z8?si=pq_Rh5rUQqx1kBSF"
    },
  ]
  return (
    
    <>
    <IndexPage />
     
   
    <div className="container mx-auto px-4 py-8">
      <div className='flex m-4 p-3 w-3/4 items-center mx-auto'>
        <p className='text-2xl text-center'>
With only a couple days to prepare, I was interviewed on the Barstool Sports podcast "The Dog Walk".  Of course, I wish I had done it differently, but it was an exciting experience nonetheless!</p>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {videos.map((videoUrl, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <iframe
            title={`Video ${index + 1}`}
            src={videoUrl.videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-auto"
          ></iframe>
        </div>
      ))}
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default Videos
