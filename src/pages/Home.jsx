import Contact from "../components/Contact"
import Courses from "../components/Corses"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Why from "../components/Why"

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Why />
    <Courses />
    <Contact />
    <Footer />
    </>
  )
}

export default Home