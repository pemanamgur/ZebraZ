import React from 'react'
import IndexPage from '../routes'
import Footer from '../components/Footer'
import { Menu, X, Check } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function Pricing() {
  const plans = [
    {
      name: 'Basic plan',
      price: '$200/1.5hours',
      features: [
        'Additional time $50 for 30minute',
        'Design can be tailored ',
        'The industry standard being 15 people per hour receiving each service',
        'Best way to make your day',
        'We are family ',
      ],
    },
    // {
    //   name: 'Business plan',
    //   price: '$20/mth',
    //   features: [
    //     '200+ integrations',
    //     'Advanced reporting and analytics',
    //     'Up to 20 individual users',
    //     '40GB individual data each user',
    //     'Priority chat and email support',
    //   ],
    // },
    // {
    //   name: 'Enterprise plan',
    //   price: '$40/mth',
    //   features: [
    //     'Advanced custom fields',
    //     'Audit log and data history',
    //     'Unlimited individual users',
    //     'Unlimited individual data',
    //     'Personalized+priority service',
    //   ],
    // },
  ]

  return (
    <>
     <IndexPage />
 {/* Hero Section */}
 <div className="flex flex-col space-y-8 pb-10 pt-12 text-center md:pt-24">
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
          Please contact me using the form at the bottom of the page to discuss your event! 
          </p>
          <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-xl">
           
I am only offering Balloon Twisting and Face-painting at the present time.Current rates of services:
          </p>
        </div>
        <div className="mt-8 w-1/2  mx-auto space-y-4 md:mt-12">
          <div className="grid items-center space-y-8 lg:grid-cols-1 lg:space-x-8 lg:space-y-0">
            {plans.map((plan) => (
              <div key={plan.name} className=" rounded-2xl border border-gray-200 bg-white shadow">
                <div className="flex w-full flex-col justify-start space-y-4 px-8 pt-10">
                  <p className="text-4xl font-bold leading-10">{plan.price}</p>
                  <div className="flex w-full flex-col items-start justify-start space-y-1">
                    <p className="w-full text-xl font-semibold leading-loose text-gray-900">
                      {plan.name}
                    </p>
                    <p className="w-full text-base leading-normal text-gray-600">
                      Billed annually.
                    </p>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start px-8 pb-10 pt-8">
                  <div className="flex w-full flex-col space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="inline-flex w-full space-x-3">
                        <div className="flex items-center justify-center rounded-full bg-gray-100 p-1">
                          <Check className="h-4 w-4" />
                        </div>
                        <p className="w-full text-base leading-normal text-gray-600">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex w-full flex-col px-8 pb-8">
                  <div className="flex w-full flex-col items-start justify-start space-y-3">
                    <button
                      type="button"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Get Started
                    </button>
                    <NavLink
                    to={"/dashboard/contact"}
                    className="w-full"
                    >
                    <button
                      type="button"
                      className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Contact Us
                    </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* FAQs */}
        <div className="mt-14 space-y-16 bg-white py-12">
          <div>
            <div className="">
              <div className="space-y-5">
                <div className="space-y-3">
                  <p className="text-2xl font-bold leading-10 text-gray-900">FAQS</p>
                </div>
                <p className="max-w-xl text-base text-gray-600">
                 
I am only offering Balloon Twisting and Face-painting at the present time.Current rates of services:Balloon Twisting or Facepainting1.5 hours- $additional time- $50 per HALF-hour.I recommend booking an hour per 5 to 20 people receiving a custom balloon, and 5 to 15 people who will be face-paint.(The industry standard being 15 people per hour receiving each service).
                </p>
                <hr className="my-8" />
              </div>
            </div>
            {/* faq */}
          
            <div className="mt-10">
              <div className="flex flex-col justify-between rounded-md bg-gray-50 p-4 md:flex-row md:items-center md:p-8 lg:space-x-8">
                <div className="space-y-2">
                  <p className="text-xl font-semibold leading-loose text-gray-900">
                    Still have questions?
                  </p>
                  <p className="text-base text-gray-600 md:text-lg md:leading-7">
                  The average price within my network is roughly $125 per hour, with 2 hour minimums often required. 
                  
                  </p>
                </div>
                <NavLink
                 to={"/dashboard/contact"}
                >
                <button
                  type="button"
                  className="mt-4 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:mt-0"
                >
                  Get in Touch
                </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      
<Footer />
  </>
  )
}

export default Pricing
