

import img from '../assets/images/hero.png'
const Hero = () => {
  return (
    <>
    <section className="text-gray-600 body-font pt-14 min-h-screen">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font md:text-7xl text-3xl mb-4 font-medium text-gray-900 ">Learn the skills of tomorrow.
      </h1>
      <p className="mb-8 leading-relaxed pb-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi autem placeat eaque illum facilis a nostrum vitae maiores, impedit fugiat odio voluptates quisquam tenetur aspernatur optio delectus voluptatem. Debitis.</p>
      <div className="flex justify-center gap-2">
        <button className="inline-flex text-white bg-violet-500 border-0 md:px-10 px-3 text-sm lg:text-base py-4 rounded-full font-medium focus:outline-none hover:bg-violet-600  hover:scale-105 transition-all">Explore Courses</button>
        <button className="inline-flex text-black bg-yellow-200 border-0 md:px-10 px-3 text-sm lg:text-base py-4 rounded-full font-medium focus:outline-none hover:bg-yellow-300  hover:scale-105 transition-all">Explore Courses</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={img} />
    </div>
  </div>
</section>
    </>
  )
}

export default Hero