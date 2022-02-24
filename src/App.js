import { Routes, Route, BrowserRouter } from "react-router-dom";

import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route index element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
