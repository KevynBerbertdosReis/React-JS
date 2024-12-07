import ProductBadge from "../ProductImgDestaque/ProductImgDestaque";

function ProductImgDestaque({ title, img }) {
  return (
    <>
      <div>
        <ProductBadge />
        <h3> {title} </h3>
        <button></button>
        <img src={img} alt="" />
      </div>
    </>
  );
}

export default ProductImgDestaque ;