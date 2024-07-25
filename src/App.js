import './stylesheets/styles.css'
import Navbar from './components/Navbar.js'
import Pricing from './pages/Pricing.js'
import About from './pages/About.js'
import Home from './pages/Home.js'

export default function App() {

  let component;

  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/pricing":
      component = <Pricing />
      break
    case "/about":
      component = <About />
      break
    default:
      component = <Home />
      break
  }

  return (
    <>
      <Navbar />
      <div className="container">
        {component} 
      </div>
    </>
  );
}
