import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import About from "./pages/About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="Home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
