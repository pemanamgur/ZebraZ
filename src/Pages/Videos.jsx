import React from 'react'

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
 
    <div className="container mx-auto px-4 py-8">
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
  )
}

export default Videos
