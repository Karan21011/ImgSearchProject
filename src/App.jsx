import { Routes, Route } from "react-router-dom";
import Header from "./Component/Navbar/Header";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Services from "./Component/Services/Services";
import Home from "./Component/Home/Home";

function App() {
  return (
    <>



      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        

      </Routes>

    </>
  );
}

export default App;

// <Header />
// <>
//   <About />
//   <Projects />
//   <Contact />
// </>
