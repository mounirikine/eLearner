import { CiSearch } from "react-icons/ci"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { courses } from "../data/courses"
import { FaClock, FaPlay } from "react-icons/fa"

const Courses = () => {
  return (
    <>
    <Navbar />
    <section className='px-6 md:px-20 pb-10  pt-40 text-black'>
        <main className='md:px-14'>
          <h1 className='text-5xl font-medium py-10 text-center text-black'>Browse our popular courses</h1>
          <div className="flex items-center justify-center md:justify-end">
            <div className='bg-slate-100 px-5 md:px-10 flex items-center py-3 rounded-full w-full md:w-6/12 mb-10 md:mx-auto'>
              <CiSearch className='text-3xl font-medium' />
              <input type="text" className='w-full md:w-11/12 py-2 text-lg px-3 bg-transparent outline-none' placeholder='Search' />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
            {courses.map((item, index) => (
              <div key={index} className='rounded-2xl border hover:scale-105 transition-all'>
                <img src={item.img} className='rounded-t-2xl w-full' alt={item.title} />
                <div className='flex items-center mt-5 px-5 gap-2'>
                  <h1 className='px-7 rounded-full bg-yellow-200 font-medium py-2'>{item.cat}</h1>
                  <h1 className='px-10 rounded-full text-black font-medium py-2 border'>$ {item.price} USD</h1>
                </div>
                <h1 className='text-2xl px-5 pt-2 pb-5 font-medium'>{item.title}</h1>
                <hr className='w-10/12 mx-auto mb-2' />
                <div className="flex items-center py-2 px-5">
                  <h1 className='px-5 flex items-center gap-2 font-medium'><FaPlay className='text-sm' /> {item.vid}</h1>
                  <h1 className='px-5 flex items-center gap-2 font-medium'><FaClock /> {item.time}</h1>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
      <main className="w-11/12 bg-black mx-auto py-20">
    <h1 className='text-white  text-center  py-10 text-6xl w-8/12 mx-auto'>Grow your career with eLearner top-notch online courses</h1>
    <div className="flex items center justify-center gap-4">
    <button className="inline-flex text-white bg-violet-500 border-0 md:px-10 px-3 text-sm lg:text-base py-4 rounded-full font-medium focus:outline-none hover:bg-violet-600  hover:scale-105 transition-all">Explore Courses</button>
    <button className="inline-flex text-black bg-yellow-200 border-0 md:px-10 px-3 text-sm lg:text-base py-4 rounded-full font-medium focus:outline-none hover:bg-yellow-300  hover:scale-105 transition-all">Explore Courses</button>

    </div>
  </main>
    <Footer />
    </>
  )
}

export default Courses