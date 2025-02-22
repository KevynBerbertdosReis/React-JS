import "./Home.css";
function Home() {
  const addProduct = () => {
    const formProduct = document.forms[0];
    const formData = new FormData(formProduct);
    const product = Object.fromEntries(formData);
    createProduct(product);
  };

  const createProduct = (product) => {
    fetch("http://localhost:3000/product", {
      method: "post",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <form id="form-product">
        <div className="form-controller row">
          <label htmlFor="product_name">Nome do produdo</label>
          <input type="text" name="name" />
        </div>
        <div className="form-controller row">
          <label htmlFor="product_name">Marca</label>
          <input type="text" name="brand" />
        </div>
        <div className="form-controller row">
          <label htmlFor="product_name">Descrição</label>
          <input type="text" name="description" />
        </div>
        <button type="button" onClick={addProduct}>
          Cadastrar
        </button>
      </form>
    </>
  );
}

export default Home;
