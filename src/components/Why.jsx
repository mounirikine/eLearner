import img from '../assets/images/why.png'
import a from '../assets/images/cat1.png'
import b from '../assets/images/cat2.png'
import c from '../assets/images/cat3.png'


const Why = () => {
  return (
<>
<section className="px-4 md:px-10 lg:px-20 py-8 md:py-12 lg:py-16">
  <h1 className="text-center text-black py-3 text-4xl md:text-5xl lg:text-6xl font-medium">Why Choose Us?</h1>
  <p className="w-full md:w-9/12 lg:w-8/12 text-lg text-center mx-auto">Non magna tempor sit at donec cursus adipiscing adipiscing ut at pharetra habitant sagittis tincidunt adipiscing gravida at eget eget volutpat vestibulum.</p>

  <div className="border flex flex-col md:flex-row items-center rounded-3xl overflow-hidden mt-10">
    <div className="w-full md:w-5/12 px-4 md:px-10 md:pt-0">
      <h2 className="text-2xl md:text-4xl lg:text-4xl mb-4 md:mb-5 font-medium text-black">More than +500 courses made for you</h2>
      <p className="text-base md:text-lg mb-6 md:mb-10">Non magna tempor sit at donec cursus adipiscing adipiscing ut at pharetra habitant sagittis tinciduntol.</p>
      <button className="inline-flex text-black bg-yellow-200 border-0 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-full font-medium focus:outline-none hover:bg-yellow-300 hover:scale-105 transition-all">Explore Courses</button>
    </div>
    <div className="w-full md:w-7/12 lg:h-[450px] overflow-hidden">
      <img src={img} alt="" className="w-full " />
    </div>
  </div>
</section>
<section>
  <div className="grid px-4 sm:px-8 md:px-16 lg:px-24 py-4 md:py-8 grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
    <div className="border rounded-3xl hover:scale-105 transition-all">
      <img src={a} alt="" className='w-full rounded-3xl'/>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-medium pt-6 md:pt-8 lg:pt-10 '>Industry expert teachers</h1>
      <p className='text-center text-base md:text-lg lg:text-xl pt-2 pb-6 md:pb-8 lg:pb-10'>Lectus eu amet mi sem porttitor enim aenean amet nullam porttitor turpis.</p>
    </div>
    <div className="border rounded-3xl hover:scale-105 transition-all">
      <img src={b} alt="" className='w-full rounded-3xl'/>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-medium pt-6 md:pt-8 lg:pt-10 '>More than +50 categories</h1>
      <p className='text-center text-base md:text-lg lg:text-xl pt-2 pb-6 md:pb-8 lg:pb-10'>Eget non viverra iaculis eu feugiat etol nibh vitae duis pellentesque neque.</p>
    </div>
    <div className="border rounded-3xl hover:scale-105 transition-all">
      <img src={c} alt="" className='w-full rounded-3xl'/>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-medium pt-6 md:pt-8 lg:pt-10 '>Powerful platform</h1>
      <p className='text-center text-base md:text-lg lg:text-xl pt-2 pb-6 md:pb-8 lg:pb-10'>Tempor laoreet vitae mattis id integer eu lectus tincidunt donec dolor sit.</p>
    </div>
  </div>
</section>
<div className='flex items-center justify-center py-10'>
<button className="inline-flex text-white bg-violet-500 border-0 md:px-10 px-3 text-sm lg:text-base py-4 rounded-full font-medium focus:outline-none hover:bg-violet-600  hover:scale-105 transition-all">Explore Courses</button>

</div>

</>

  )
}

export default Why