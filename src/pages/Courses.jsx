import { CiSearch } from "react-icons/ci"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { courses } from "../data/courses"
import { FaClock, FaPlay } from "react-icons/fa"

const Courses = () => {
  return (
    <>
    <Navbar />
    <section className='px-4 md:px-20 pb-10 pt-20 md:pt-40 text-black'>
      <main className='md:px-14'>
        <h1 className='text-3xl md:text-5xl font-medium py-5 md:py-10 text-center text-black'>Browse our popular courses</h1>
        <div className="flex items-center justify-center md:justify-end">
          <div className='bg-slate-100 px-3 md:px-10 flex items-center py-2 md:py-3 rounded-full w-full md:w-6/12 mb-5 md:mb-10 md:mx-auto'>
            <CiSearch className='text-xl md:text-3xl font-medium' />
            <input type="text" className='w-full md:w-11/12 py-2 text-base md:text-lg px-3 bg-transparent outline-none' placeholder='Search' />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {courses.map((item, index) => (
            <div key={index} className='rounded-lg border hover:shadow-lg transition-all'>
              <img src={item.img} className='rounded-t-lg w-full' alt={item.title} />
              <div className='flex items-center mt-3 md:mt-5 px-3 md:px-5 gap-2'>
                <h1 className='px-5 rounded-full bg-yellow-200 font-medium py-1 md:py-2 text-sm md:text-base'>{item.cat}</h1>
                <h1 className='px-7 rounded-full text-black font-medium py-1 md:py-2 border'>$ {item.price} USD</h1>
              </div>
              <h1 className='text-lg md:text-2xl px-3 md:px-5 pt-2 pb-3 md:pb-5 font-medium'>{item.title}</h1>
              <hr className='w-11/12 mx-auto mb-1 md:mb-2' />
              <div className="flex items-center py-1 md:py-2 px-3 md:px-5">
                <h1 className='px-3 md:px-5 flex items-center gap-2 font-medium text-sm md:text-base'><FaPlay className='text-xs md:text-sm' /> {item.vid}</h1>
                <h1 className='px-3 md:px-5 flex items-center gap-2 font-medium text-sm md:text-base'><FaClock className='text-xs md:text-sm' /> {item.time}</h1>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
    <main className="w-full md:w-11/12 bg-black mx-auto py-10 md:py-20">
      <h1 className='text-white text-center py-5 md:py-10 text-3xl md:text-6xl w-full md:w-8/12 mx-auto'>Grow your career with eLearner top-notch online courses</h1>
      <div className="flex items-center justify-center gap-3 md:gap-4">
        <button className="inline-flex text-white bg-violet-500 border-0 md:px-10 px-4 py-3 md:py-4 rounded-full font-medium focus:outline-none hover:bg-violet-600 hover:scale-105 transition-all">Explore Courses</button>
        <button className="inline-flex text-black bg-yellow-200 border-0 md:px-10 px-4 py-3 md:py-4 rounded-full font-medium focus:outline-none hover:bg-yellow-300 hover:scale-105 transition-all">Explore Courses</button>
      </div>
    </main>
    <Footer />
  </>
  
  )
}

export default Courses