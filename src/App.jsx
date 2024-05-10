import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"


function App() {

  return (
    <>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/about"  element={<About />}/>
        <Route path="/courses"  element={<Courses  />}/>
        <Route path="/login"  element={<Login  />}/>
        <Route path="/register"  element={<SignUp  />}/>
      </Routes>
    </>
  )
}

export default App
