import { useEffect, useState } from "react";

function Home() {
  const [productList, setProductList] = useState([]);
  const createProduct = () => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setProductList(response);
      });
  };

  useEffect(() => {
    createProduct();
  }, []);

  return (
    <>
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Marca</th>
          <th>Descrição</th>
        </thead>
        <tbody>
          {productList.length > 0
            ? productList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.brand}</td>
                    <td>{item.description}</td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
    </>
  );
}

export default Home;
