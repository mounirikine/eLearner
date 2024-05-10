import { FaClock, FaPlay } from 'react-icons/fa';
import { courses ,cats} from '../data/courses';
import { CiAlignRight, CiSearch } from 'react-icons/ci';
import { FaCircleArrowRight } from 'react-icons/fa6';

import l1 from '../assets/images/l1.jpg'
import l2 from '../assets/images/l2.jpg'
import l3 from '../assets/images/l3.jpg'



import t1 from '../assets/images/t1.jpg'
import t2 from '../assets/images/t2.jpg'
import t3 from '../assets/images/t3.jpg'
import t4 from '../assets/images/t4.jpg'

const Courses = () => {
  return (
    <>
<section className='px-4 md:px-24 py-6 md:py-10'>
  <main className='md:px-6 lg:px-14'>
    <h1 className='text-3xl md:text-5xl font-medium py-6 md:py-10 text-center'>Browse our popular courses</h1>
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
      <div className='bg-slate-100 px-4 md:px-10 flex items-center py-2 md:py-3 rounded-full w-full md:w-6/12 mb-6 md:mb-10 md:mx-auto'>
        <CiSearch className='text-xl md:text-3xl font-medium' />
        <input type="text" className='w-full py-1 md:py-2 text-base md:text-lg px-2 md:px-3 bg-transparent outline-none' placeholder='Search' />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 ">
      {courses.map((item, index) => (
        <div key={index} className='rounded-lg border hover:shadow-lg transition-all'>
          <img src={item.img} className='rounded-t-lg w-full' alt={item.title} />
          <div className='flex items-center mt-3 md:mt-5 px-3 md:px-5 gap-2'>
            <h1 className='px-4 md:px-7 rounded-full bg-yellow-200 font-medium py-1 md:py-2 text-sm md:text-base'>{item.cat}</h1>
            <h1 className='px-6 md:px-10 rounded-full text-black font-medium py-1 md:py-2 border text-sm md:text-base'>$ {item.price} USD</h1>
          </div>
          <h1 className='text-xl md:text-2xl px-3 md:px-5 pt-2 pb-3 md:pb-5 font-medium'>{item.title}</h1>
          <hr className='w-9/12 md:w-10/12 mx-auto mb-2 md:mb-4' />
          <div className="flex items-center py-1 md:py-2 px-3 md:px-5">
            <h1 className='px-2 md:px-5 flex items-center gap-1 md:gap-2 font-medium text-xs md:text-sm'><FaPlay className='text-xs md:text-sm' /> {item.vid}</h1>
            <h1 className='px-2 md:px-5 flex items-center gap-1 md:gap-2 font-medium text-xs md:text-sm'><FaClock className='text-xs md:text-sm' /> {item.time}</h1>
          </div>
        </div>
      ))}
    </div>
  </main>
</section>

      <div className='flex items-center justify-center py-10'>
        <button className="inline-flex text-white bg-violet-500 border-0 md:px-10 px-3 text-sm lg:text-base py-4 rounded-full font-medium focus:outline-none hover:bg-violet-600  hover:scale-105 transition-all">Explore Courses</button>
      </div>
      <section className="px-4 md:px-8 lg:px-16 xl:px-32 py-10 md:py-20">
  <main className="mx-auto">
    <h1 className="text-3xl md:text-5xl font-medium py-3 text-center">Courses categories</h1>
    <h1 className="text-black w-full md:w-8/12 text-center mx-auto mb-10 md:mb-20 text-base md:text-lg lg:text-xl">Non magna tempor sit at donec cursus adipiscing adipiscing ut at pharetra habitant sagittis tincidunt adipiscing gravida at eget eget volutpat vestibulum.</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {cats.map((item, index) => (
        <div key={index} className="flex flex-col gap-4 md:gap-6">
          <div className="w-full overflow-hidden">
            <img src={item.img} alt="" className="w-full hover:scale-110 transition-all" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-black text-xl md:text-3xl font-medium mb-2">{item.cat}</h1>
            <h1 className="text-lg md:text-base mb-3">{item.title}</h1>
            <div className="flex items-center justify-between">
              <h1 className="flex items-center gap-1 text-base md:text-lg font-medium hover:gap-2 md:hover:gap-3 transition-all cursor-pointer">Learn more <FaCircleArrowRight className="text-violet-600" /></h1>
              <h1 className="px-4 py-1 bg-yellow-200 text-base md:text-lg font-medium rounded-full">{item.much} courses</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  </main>
</section>



<section className="px-4 md:px-8 lg:px-16 xl:px-32 py-6 md:py-10">
  <main className="mx-auto">
    <h1 className="text-center py-3 md:py-5 text-xl md:text-4xl font-medium">How do our courses work?</h1>
    <h1 className="text-base md:text-lg w-full md:w-9/12 mx-auto text-center mb-6 md:mb-10">Non magna tempor sit at donec cursus adipiscing adipiscing ut at pharetra habitant sagittis tincidunt adipiscing gravida at eget eget volutpat vestibulum.</h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
      <div className="border rounded-lg">
        <img src={l1} alt="" className="w-full rounded-t-lg" />
        <h1 className="text-xl md:text-2xl text-center py-4 md:py-5 font-medium">1. Learn with our courses</h1>
        <p className="text-base md:text-lg text-center mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, optio recusandae voluptates saepe commodi</p>
      </div>
      <div className="border rounded-lg">
        <img src={l2} alt="" className="w-full rounded-t-lg" />
        <h1 className="text-xl md:text-2xl text-center py-4 md:py-5 font-medium">2. Graduate</h1>
        <p className="text-base md:text-lg text-center mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, optio recusandae voluptates saepe commodi</p>
      </div>
      <div className="border rounded-lg">
        <img src={l3} alt="" className="w-full rounded-t-lg" />
        <h1 className="text-xl md:text-2xl text-center py-4 md:py-5 font-medium">3. Work for Startups</h1>
        <p className="text-base md:text-lg text-center mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, optio recusandae voluptates saepe commodi</p>
      </div>
    </div>
  </main>
</section>

<div className="flex items-center justify-center py-6 md:py-10">
  <button className="inline-flex text-white bg-violet-500 border-0 md:px-8 lg:px-10 px-3 py-2 md:py-3 lg:py-4 rounded-full font-medium focus:outline-none hover:bg-violet-600 hover:scale-105 transition-all text-base md:text-lg lg:text-base">
    Explore Courses
  </button>
</div>


<section>
  <main className="w-full md:w-11/12 bg-black mx-auto py-10 md:py-20">
    <h1 className="text-white text-center py-6 md:py-10 text-4xl md:text-6xl w-10/12 md:w-8/12 mx-auto">Grow your career with eLearner top-notch online courses</h1>
    <div className="flex items-center justify-center gap-4">
      <button className="inline-flex text-white bg-violet-500 border-0 md:px-8 py-2 lg:px-10 px-3 md:py-3 lg:py-4 rounded-full font-medium focus:outline-none hover:bg-violet-600 hover:scale-105 transition-all text-base md:text-lg lg:text-base">
        Explore Courses
      </button>
      <button className="inline-flex text-black bg-yellow-200 border-0 md:px-8 py-2 lg:px-10 px-3 md:py-3 lg:py-4 rounded-full font-medium focus:outline-none hover:bg-yellow-300 hover:scale-105 transition-all text-base md:text-lg lg:text-base">
        Explore Courses
      </button>
    </div>
  </main>
</section>


<section>
  <main className="px-4 md:px-8 lg:px-16 xl:px-32 py-10 md:py-20">
    <h1 className="text-center py-3 md:py-5 text-xl md:text-4xl font-medium">Industry experts teachers</h1>
    <h2 className="text-base md:text-lg w-full md:w-9/12 mx-auto text-center mb-6 md:mb-10">Non magna tempor sit at donec cursus adipiscing adipiscing ut at pharetra habitant sagittis tincidunt adipiscing gravida at eget eget volutpat vestibulum.</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 md:py-10 gap-4 md:gap-6">
      <div className="relative"> 
        <img src={t1} alt="" className="w-full hover:scale-105 transition-all" />
        <h1 className="absolute bottom-3 left-0 right-0 mx-auto bg-white-600 px-6 md:px-10 py-2 rounded-full bg-white text-base md:text-lg font-medium flex items-center justify-center w-9/12">John Carter</h1>
      </div>
      <div className="relative"> 
        <img src={t2} alt="" className="w-full hover:scale-105 transition-all" />
        <h1 className="absolute bottom-3 left-0 right-0 mx-auto bg-white-600 px-6 md:px-10 py-2 rounded-full bg-white text-base md:text-lg font-medium flex items-center justify-center w-9/12">Sophie Moore</h1>
      </div>
      <div className="relative"> 
        <img src={t3} alt="" className="w-full hover:scale-105 transition-all" />
        <h1 className="absolute bottom-3 left-0 right-0 mx-auto bg-white-600 px-6 md:px-10 py-2 rounded-full bg-white text-base md:text-lg font-medium flex items-center justify-center w-9/12">Andy Smith</h1>
      </div>
      <div className="relative"> 
        <img src={t4} alt="" className="w-full hover:scale-105 transition-all" />
        <h1 className="absolute bottom-3 left-0 right-0 mx-auto bg-white-600 px-6 md:px-10 py-2 rounded-full bg-white text-base md:text-lg font-medium flex items-center justify-center w-9/12">Lily Woods</h1>
      </div>
    </div>
  </main>
</section>
<div className="flex items-center justify-center py-3">
  <button className="inline-flex text-white bg-violet-500 border-0 md:px-8 lg:px-10 px-3 py-2 md:py-3 lg:py-4 rounded-full font-medium focus:outline-none hover:bg-violet-600 hover:scale-105 transition-all text-base md:text-lg lg:text-base">Become a teacher</button>
</div>

    </>
  )
}

export default Courses;
