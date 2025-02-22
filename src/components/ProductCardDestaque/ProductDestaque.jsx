import style from "./ProductCardDestaque.module.css";

function ProductCardDestack({ title, image, discount }) {
  return (
    <>
      <div className={style.productCardDestack}>
        <span className={style.badge}>{discount}</span>
        <h3> {title} </h3>
        <button>Comprar</button>
        <img src={image} alt="" />
      </div>
    </>
  );
}

export default ProductCardDestack;