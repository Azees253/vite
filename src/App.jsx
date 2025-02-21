import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import Collection from "./pages/Collection";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="Home" element={<Home />} />
        <Route path="collection" element={<Collection />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
