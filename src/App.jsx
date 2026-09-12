import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from "./components/Footer";
import { useNavigate } from "react-router";
import Workspace from "./pages/Workspace";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Detail from "./components/Detail";
import Login from "./pages/Login";
import workspacesData from "./data/workspace";
import SignUp from "./pages/SignUp";
import SpaceOwner from "./pages/SpaceOwner"
import BookingPage from "./components/BookingPage";
import MyBooking from "./pages/MyBooking";
import UserNotification from "./pages/UserNotification"
import OwnerNotification from "./pages/OwnerNotification"
import Profile from "./pages/Profile";
function App() {
  let navigate = useNavigate()
  const [booking, setBooking] = useState(() => {
    let data = localStorage.getItem("booking")
    return data ? JSON.parse(data) : []
  })

  //check is user logged
  const [isLogged, setIsLogged] = useState(() => {
    let data = localStorage.getItem("isLogged")
    return data ? JSON.parse(data)
      : false
  })
  //save suername later used in the navbar 
  const [username, setUsername] = useState(() => {
    let data = localStorage.getItem("username")
    return data ? JSON.parse(data)
      : ""
  })
  const [register, setRegister] = useState(() => {

    let data = localStorage.getItem("user")
    return data ? JSON.parse(data)
      : {
        username: "",
        password: "",
        email: "",
        location: "",
        role: ""
      }
  })
  localStorage.setItem("user", JSON.stringify(register))
  localStorage.setItem("username", JSON.stringify(username))
  localStorage.setItem("isLogged", JSON.stringify(isLogged))

  const handleLogin = () => {
    setIsLogged(true)
  }

  const handleLogout = () => {
    setIsLogged(false)
    setUsername("")
    setRegister(null)
    localStorage.removeItem("user")
    localStorage.removeItem("username")
    localStorage.removeItem("isLogged")
    navigate("/")
  }

  const [workspaces, setWorkspaces] = useState(workspacesData)


  return (

    <>
      <Navbar isLogged={isLogged} username={username} />
      <Routes>
        <Route path="/" element={<Home workspaces={workspaces} />} />
        <Route path="/workspaces" element={<Workspace workspaces={workspaces} />} />
        <Route path="/workspaces/:id" element={<Detail workspaces={workspaces} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login register={register} setIsLogged={setIsLogged} setUsername={setUsername} />} />
        <Route path="/signup" element={<SignUp setRegister={setRegister} setUsername={setUsername} setIsLogged={setIsLogged} />} />
        <Route path="/profile" element={<Profile handleLogout={handleLogout} register={register} workspaces={workspaces} />} />
        <Route path="/booking-page" element={<BookingPage booking={booking} setBooking={setBooking} />} />
        <Route path="/my-booking" element={<MyBooking booking={booking} />} />
        <Route path="/user-notification" element={<UserNotification />} />
        <Route path="/owner-notification" element={<OwnerNotification />} />
        <Route path="/space-owner" element={<SpaceOwner workspaces={workspaces} />} />
        <Route />
      </Routes>
      <Footer />
    </>
  )
}

export default App
