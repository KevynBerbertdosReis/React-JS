import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./views/layout/layout";
import Home from "./views/home/home";
import Products from "./views/products/Products";
import Categories from "./views/categories/Categories";
import Orders from "./views/orders/Orders";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/orders" element={<Orders />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
