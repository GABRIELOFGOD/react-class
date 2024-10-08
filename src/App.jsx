import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";

function App(){
  const location = useLocation();

  const hidePath = ["/product"];
  
  return (
    <div>
      {!hidePath.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;