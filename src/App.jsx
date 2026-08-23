import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from "./components/Footer";
function App() {

  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
