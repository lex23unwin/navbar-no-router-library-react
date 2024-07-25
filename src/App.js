import './stylesheets/styles.css'
import Navbar from './components/Navbar.js'
import Pricing from './pages/Pricing.js'
import About from './pages/About.js'
import Home from './pages/Home.js'
import { Route, Routes} from "react-router-dom"

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/pricing" element={<Pricing/>} />
        </Routes>
      </div>
    </>
  );
}
