import React from 'react'
import { useForm , ValidationError} from '@formspree/react';
import IndexPage from '.';
import Footer from '../components/Footer';


const Contact = () => {
  const [state, handleSubmit] = useForm("xayrkyjo");

  if(state.succeeded){
    return <p>Thank for joining</p>
  }
  return (
 



  <div>
  <IndexPage/>
  <div className="mx-auto max-w-7xl px-4">
    <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
      <div className="mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3">
        <p className="text-center text-xs font-semibold leading-normal md:text-sm">
          Share your thoughts
        </p>
      </div>
      <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
        Love to hear from you
      </p>
      <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        veritatis voluptates neque itaque repudiandae sint, explicabo assumenda
        quam ratione placeat?
      </p>
    </div>
    <div className="mx-auto max-w-7xl py-12 md:py-24">
      <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="px-2 md:px-12">
            <p className="text-2xl font-bold text-gray-900 md:text-4xl">
              Get in touch
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Our friendly team would love to hear from you.
            </p>
            <form action="https://formspree.io/f/xayrkyjo" 
            method='POST'
             className="mt-8 space-y-4"
             onSubmit={handleSubmit}
             >
              <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="text"
                    id="first_name"
                    placeholder="First Name"
                    name='first_name'
                  />

                    <ValidationError 
                    prefix="First_name" 
                    field="first_name"
                    errors={state.errors}
                  />

                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="text"
                    id="last_name"
                    placeholder="Last Name"
                    name='last_name'
                  />
                     <ValidationError 
                    prefix="Last_name" 
                    field="last_name"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="text"
                  id="email"
                  placeholder="Email"
                  name='email'
                />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="phone_number"
                >
                  Phone number
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="tel"
                  id="phone_number"
                  placeholder="Phone number"
                  name='phone_number'
                />
                  <ValidationError 
                    prefix="Phone_Number" 
                    field="phone_number"
                    errors={state.errors}
                  />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  id="message"
                  placeholder="Leave us a message"
                  cols="3"
                  name='message'
                ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                disabled={state.submitting}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <img
          alt="Contact us"
          className="hidden max-h-full w-full rounded-lg object-cover lg:block"
          src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=687&amp;h=800&amp;q=80"
        />
      </div>
    </div>
  </div>
  <hr className="mt-6" />
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.811632089697!2d85.34242557530125!3d27.72310167617351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1965f22cc503%3A0xae2e5f855870db89!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1715790998366!5m2!1sen!2snp" width="95%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
  className='ml-8 mb-8'
  ></iframe>
  

  <Footer/>
</div>

 
  )
}

export default Contact
