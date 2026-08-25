import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from "./components/Footer";
import Workspace from "./pages/Workspace";

function App() {
  const [workspaces, setWorkspaces] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/workspaces")
      .then((response) => response.json())
      .then((data) => { setWorkspaces(data) })
  }, [])
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home workspaces={workspaces} />} />
        <Route path="/workspaces" element={<Workspace workspaces={workspaces} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
