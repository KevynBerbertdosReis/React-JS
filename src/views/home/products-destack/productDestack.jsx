import ProductCardDestack from "../../../components/ProductCardDestaque/ProductDestaque";
import NikeProducDestackImg from "../../../assets/Banner/TenisNike.png";
import TshirtStarWarsImg from "../../../assets/Banner/camisa.png";
import HeadsetGamerImg from "../../../assets/Banner/headset.png";

function ProductDestack() {
  const productsDestack = [
    { title: "Novo drop supreme", image: TshirtStarWarsImg, discount: 30 },
    { title: "Coleção Adidas", image: NikeProducDestackImg, discount: 50 },
    { title: "Novo Beats Bass", image: HeadsetGamerImg, discount: 60 },
  ];

  return (
    <>
      {productsDestack.map((product, index) => (
        <ProductCardDestack
          key={index}
          title={product.title}
          image={product.image}
          discount={product.discount}
        />
      ))}
    </>
  );
}

export default ProductDestack;