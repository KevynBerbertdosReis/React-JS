import { Outlet } from "react-router";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/menu";

function Layout() {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <Outlet />
      </main>
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