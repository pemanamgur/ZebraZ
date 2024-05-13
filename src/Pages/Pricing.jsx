import React from 'react'
import IndexPage from '../routes'
import Footer from '../components/Footer'

function Pricing() {
  return (
    <>
     <IndexPage />

<div className="flex justify-center">
  <div className="max-w-md w-full rounded overflow-hidden shadow-lg bg-black text-white p-6 m-4">
    <h2 className="text-2xl font-semibold mb-4">Pricing Information</h2>
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Balloon Twisting or Face Painting</h3>
      <p>1.5 hours - $200</p>
      <p>Additional time - $50 per half-hour</p>
    </div>
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Booking Recommendations</h3>
      <p>
        For balloon twisting, recommend booking 1 hour for 5 to 20 people. Industry standard is
        15 people per hour.
      </p>
      <p>
        For face painting, recommend booking 1 hour for 5 to 15 people. Industry standard is 15
        people per hour.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">Additional Performers</h3>
      <p>
        If you need additional performers, average price within network is $125 per hour with a
        2-hour minimum.
      </p>
    </div>
  </div>
</div>
<Footer />
  </>
  )
}

export default Pricing
