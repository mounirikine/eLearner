import Navbar from "../components/Navbar";

import img from '../assets/images/class.jpg'

import {values} from '../data/courses'
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <Navbar />
      <section className="pt-40 bg-slate-100  pb-14">
        <h1 className="text-center text-black mb-7 font-medium text-6xl">
          About eLearner
        </h1>
        <h1 className="text-lg font-medium w-8/12 mx-auto text-center mb-40 ">
          Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi
          tristique aliquam ultrices sit cras nascetur in elementum placerat sed
          viverra risu.
        </h1>

        <div className="flex px-20 gap-10">
          <div className="w-7/12">
            <h1 className="text-5xl text-black mb-10 font-medium">
              The mission behind eLearner platform
            </h1>

            <p className="text-lg text-black  mb-8">
              {" "}
              Convallis vivamus at cras porta nibh velit aliquam eget in
              faucibus mi tristique aliquam ultrices sit cras nascetur in
              elementum placerat sed viverra risus in turpis vitae sed est
              tincidunt vitae. <br />
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.  <br /><br />
              {" "}
              Convallis vivamus at cras porta nibh velit aliquam eget in
              faucibus mi tristique aliquam ultrices sit cras nascetur in
              elementum placerat sed viverra risus in turpis vitae sed est
              tincidunt vitae. <br />
              <br />
              
            </p>

            <button className="inline-flex text-white bg-violet-500 border-0 md:px-10 px-3 text-sm lg:text-base py-4 rounded-full font-medium focus:outline-none hover:bg-violet-600  hover:scale-105 transition-all">Explore Courses</button>

          </div>
          <div className="w-5/12">
            <img
              src="https://assets-global.website-files.com/63bc69e0c008e8ad2e8c02e7/63c5aff9527db5ed883b76e4_our-mission-elearner-webflow-ecommerce-template-p-800.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section>
        <main className="px-24 py-20 ">
          <h1 className="text-black py-5 text-center text-6xl font-medium">Our work values</h1>
          <p className="w-8/12 mx-auto  text-center text-lg ">Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique aliquam ultrices sit cras nascetur in elementum place</p>

          <div className="grid grid-cols-3 px-10 gap-5  mt-20 "  >
              {
                values.map((item,index)=>(
                  <div key={index} className="flex flex-col justify-center items-center border  py-5 rounded-3xl px-5 hover:scale-105 transition-all">
                    <img src={item.img} className="w-5/12"  />
                    <h1 className="text-center pt-10 text-3xl font-medium text-black">{item.title}</h1>
                    <h1 className="text-center  py-2 text-gray-700 text-lg">{item.desc}</h1>
                  </div>
                ))
              }
          </div>
        </main>
      </section>
      <section>
  <main className="w-11/12 bg-black mx-auto py-20">
    <h1 className='text-white  text-center  py-10 text-6xl w-8/12 mx-auto'>Grow your career with eLearner top-notch online courses</h1>
    <div className="flex items center justify-center gap-4">
    <button className="inline-flex text-white bg-violet-500 border-0 md:px-10 px-3 text-sm lg:text-base py-4 rounded-full font-medium focus:outline-none hover:bg-violet-600  hover:scale-105 transition-all">Explore Courses</button>
    <button className="inline-flex text-black bg-yellow-200 border-0 md:px-10 px-3 text-sm lg:text-base py-4 rounded-full font-medium focus:outline-none hover:bg-yellow-300  hover:scale-105 transition-all">Explore Courses</button>

    </div>
  </main>
</section>

<div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
  <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
    <h2 className="font-medium text-black text-2xl sm:text-4xl :text-white">
      Contacts
    </h2>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
    <div className="aspect-w-16 aspect-h-6 lg:aspect-h-14 overflow-hidden bg-gray-100 rounded-2xl :bg-neutral-800">
      <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" src={img} alt="Image Description" />
    </div>

    <div className="space-y-8 lg:space-y-16">
      <div>
        <h3 className="mb-5 font-semibold text-black :text-white">
          Our address
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <div className="flex gap-4">
            <svg className="flex-shrink-0 size-5 text-gray-500 :text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>

            <div className="grow">
              <p className="text-sm text-gray-600 :text-neutral-400">
                United Kingdom
              </p>
              <div className="mt-1 text-black not-italic :text-white">
                300 Bath Street, Tay House 
                Glasgow G2 4JR
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-5 font-semibold text-black :text-white">
          Our contacts
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <div className="flex gap-4">
            <svg className="flex-shrink-0 size-5 text-gray-500 :text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path></svg>

            <div className="grow">
              <p className="text-sm text-gray-600 :text-neutral-400">
                Email us
              </p>
              <p>
                <a className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black :text-white :hover:before:bg-white :focus:before:bg-white" href="mailto:example@site.so">
                  hello@example.so
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <svg className="flex-shrink-0 size-5 text-gray-500 :text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>

            <div className="grow">
              <p className="text-sm text-gray-600 :text-neutral-400">
                Call us
              </p>
              <p>
                <a className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black :text-white :hover:before:bg-white :focus:before:bg-white" href="mailto:example@site.so">
                  +44 222 777-000
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer />
    </>
  );
};

export default About;
