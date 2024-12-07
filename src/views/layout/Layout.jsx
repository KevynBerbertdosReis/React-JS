import { Outlet } from "react-router";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/menu";
import ProductCard from "../../components/ProductCard/productCard";
import ProductDestaque from "../../components/ProductCardDestaque/ProductDestaque";


function Layout() {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <Outlet />
      </main>
      <ProductDestaque />
      <ProductCard />
      <Footer />
    </>
  );
}

export default Layout;


//<BrowserRouter>
//<Routes>
//<Rou/te path="/" element={<App />}></Route>
//</Routes>
//</BrowserRouter>

//import { BrowserRouter, Route, Routes } from "react-router";