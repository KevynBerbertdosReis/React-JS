import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";

import Layout from "./views/layout/layout";
import Home from "./views/home/Home";
import Products from "./views/products/Products";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
