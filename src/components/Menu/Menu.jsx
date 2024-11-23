import { useState } from "react";
import style from "./menu.module.css";
import { NavLink } from "react-router";

function Menu() {
  const [itemIndex, setItemIndex] = useState(0);
  const menuItens = [
    { label: "Home", path: "/" },
    { label: "Produtos", path: "products" },
    { label: "Categorias", path: "categories" },
    { label: "Meus pedidos", path: "orders" },
  ];

  function handleClick(index) {
    setItemIndex(index);
  }

  console.log(itemIndex);

  return (
    <>
      <div className="content">
        <ul className={style.menu}>
          {menuItens.map((item, index) => (
            <NavLink to={item.path} key={index}>
              <li
                onClick={() => handleClick(index)}
                className={index === itemIndex ? `${style.active}` : style.item}
              >
                {item.label}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Menu;
