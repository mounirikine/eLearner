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
      <section className='px-6 md:px-24 py-10'>
        <main className='md:px-14'>
          <h1 className='text-5xl font-medium py-10 text-center'>Browse our popular courses</h1>
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
      <div className='flex items-center justify-center py-10'>
        <button className="inline-flex text-white bg-violet-500 border-0 md:px-10 px-3 text-sm lg:text-base py-4 rounded-full font-medium focus:outline-none hover:bg-violet-600  hover:scale-105 transition-all">Explore Courses</button>
      </div>
      <section>
        <main className=' px-32 py-20'>
          <h1 className='text-5xl font-medium py-3 text-center '>Courses categories</h1>
          <h1 className='text-black w-8/12 text-center mx-auto mb-20 text-lg'>Non magna tempor sit at donec cursus adipiscing adipiscing ut at pharetra habitant sagittis tincidunt adipiscing gravida at eget eget volutpat vestibulum.</h1>
          <div className="grid grid-cols-2 gap-8 mt-10">
            {
              cats.map((item,index)=>(
                <div key={index} className='flex gap-2 '>
                  <div className="w-5/12 overflow-hidden">
                    <img src={item.img} alt="" className='hover:scale-110  transition-all' />
                  </div>
                  <div className='flex flex-col'>
                      <h1 className='text-black text-3xl font-medium mb-3'>{item.cat}</h1>
                      <h1 className='text-lg mb-5'>{item.title}</h1>
                      <div className="flex items-center justify-between">
                        <h1 className='flex items-center gap-1 text-xl font-medium hover:gap-3 transition-all cursor-pointer'>Learn more <FaCircleArrowRight className='text-violet-600' /></h1>
                        <h1 className='px-5 py-1 bg-yellow-200  font-medium rounded-full'>{item.much}courses</h1>

                      </div>
                  </div>
                </div>
              ))
            }
          </div>
        </main>
      </section>
      <section>
        <main className='px-32 py-10'>
          <h1 className='text-center  py-5 text-4xl  font-medium'>How do our courses work?</h1>
          <h1 className='text-lg w-9/12  mx-auto text-center  mb-10'>Non magna tempor sit at donec cursus adipiscing adipiscing ut at pharetra habitant sagittis tincidunt adipiscing gravida at eget eget volutpat vestibulum.</h1>


          <div className="grid grid-cols-3 gap-5 ">
            <div className='border  rounded-3xl'>
              <img src={l1} alt="" className='rounded-t-3xl' />
              <h1 className='text-2xl text-center py-5 font-medium'>1. Learn with our courses</h1>
              <p className=' text-center text-lg mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, optio recusandae voluptates saepe commodi</p>
            </div>
            <div className='border  rounded-3xl'>
              <img src={l2} alt="" className='rounded-t-3xl' />
              <h1 className='text-2xl text-center py-5 font-medium'>2. Graduate
</h1>
              <p className=' text-center text-lg mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, optio recusandae voluptates saepe commodi</p>
            </div>
            <div className='border  rounded-3xl'>
              <img src={l3} alt="" className='rounded-t-3xl' />
              <h1 className='text-2xl text-center py-5 font-medium'>3. Work for Startups</h1>
              <p className=' text-center text-lg mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, optio recusandae voluptates saepe commodi</p>
            </div>
          </div>
        </main>
      </section>
      <div className='flex items-center justify-center py-10'>
<button className="inline-flex text-white bg-violet-500 border-0 md:px-10 px-3 text-sm lg:text-base py-4 rounded-full font-medium focus:outline-none hover:bg-violet-600  hover:scale-105 transition-all">Explore Courses</button>

</div>

<section>
  <main className="w-11/12 bg-black mx-auto py-20">
    <h1 className='text-white  text-center  py-10 text-6xl w-8/12 mx-auto'>Grow your career with eLearner top-notch online courses</h1>
    <div className="flex items center justify-center gap-4">
    <button className="inline-flex text-white bg-violet-500 border-0 md:px-10 px-3 text-sm lg:text-base py-4 rounded-full font-medium focus:outline-none hover:bg-violet-600  hover:scale-105 transition-all">Explore Courses</button>
    <button className="inline-flex text-black bg-yellow-200 border-0 md:px-10 px-3 text-sm lg:text-base py-4 rounded-full font-medium focus:outline-none hover:bg-yellow-300  hover:scale-105 transition-all">Explore Courses</button>

    </div>
  </main>
</section>

<section>
  <main className='px-32 py-20'>
    <h1 className='text-center  py-5 text-4xl font-medium'>Industry experts teachers</h1>
    <h2 className='text-lg w-9/12  mx-auto text-center  mb-10'>Non magna tempor sit at donec cursus adipiscing adipiscing ut at pharetra habitant sagittis tincidunt adipiscing gravida at eget eget volutpat vestibulum.</h2>

    <div className="grid grid-cols-4  py-10 gap-6">
      <div className=' relative'> 
        <img src={t1} alt="" className=' hover:scale-105 transition-all' />
        <h1 className=' absolute bottom-3 mx-auto right-[20%]  bg-white-600 px-10 py-2 rounded-full bg-white font-medium'>John Carter</h1>
      </div>
      <div className=' relative'> 
        <img src={t2} alt="" className='hover:scale-105 transition-all' />
        <h1 className=' absolute bottom-3 mx-auto right-[20%]  bg-white-600 px-10 py-2 rounded-full bg-white font-medium'>Sophie Moore</h1>
      </div>
      <div className=' relative'> 
        <img src={t3} alt="" className='hover:scale-105 transition-all' />
        <h1 className=' absolute bottom-3 mx-auto right-[20%]  bg-white-600 px-10 py-2 rounded-full bg-white font-medium'>Andy Smith</h1>
      </div>
      <div className=' relative'> 
        <img src={t4} alt="" className='hover:scale-105 transition-all' />
        <h1 className=' absolute bottom-3 mx-auto right-[20%]  bg-white-600 px-10 py-2 rounded-full bg-white font-medium'>Lily Woods</h1>
      </div>
    </div>
  </main>
</section>
<div className='flex items-center justify-center py-3'>
<button className="inline-flex text-white bg-violet-500 border-0 md:px-10 px-3 text-sm lg:text-base py-4 rounded-full font-medium focus:outline-none hover:bg-violet-600  hover:scale-105 transition-all">Become a teacher</button>

</div>
    </>
  )
}

export default Courses;
