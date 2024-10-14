import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Dashboard from "./pages/Dashboard";
import User from "./pages/dashboard/User";
import HomeDashboard from "./pages/dashboard/HomeDashboard";
import DashboardProduct from "./pages/dashboard/DashboardProduct";
import Orders from "./pages/dashboard/Orders";

function App(){
  const location = useLocation();

  const hidePath = ["/dashboard", "/dashboard/products", "/dashboard/user", "/dashboard/orders"];
  const userNav = ["/"]

  
  return (
    <div>
      {location.pathname == "/product" ? <NewNav /> : hidePath.includes(location.pathname) ? "" : <Navbar sideContent={location.pathname == "/" ?  <LoginComponent /> : location.pathname == "/product" ? "Prosuct" : <ListComponent />} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="details/:id" element={<ProductDetails />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="" element={<HomeDashboard />} />
          <Route path="user" element={<User />} />
          <Route path="products" element={<DashboardProduct />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;

function LoginComponent(){
  return(
    <div className="font-bold text-2xl">user</div>
  )
}

function ListComponent() {
  return(
    <div className="flex gap-5">
      <button>Login</button>
      <button>Register</button>
    </div>
  )
}

function NewNav(){
  return(
    <nav className="justify-between py-3 px-20 bg-red-900 flex text-white">
      <p className="text-xl font-bold">Product Nav</p>
      <div className="flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink clad
         to="/about">About</NavLink>
      </div>
    </nav>
  )
}
