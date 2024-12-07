import ProductBadgeDestaque from "./ProductBadgeDestaque/ProductBadgeDestaque";
import ProductButton from "./ProductButton/ProductButton";
import ProductHeader from "./ProductHeader/ProductHeader";
import ProductImgDestaque from "./ProductImgDestaque/ProductImgDestaque";




function ProductDestaque(){
    return(<>
    <ProductBadgeDestaque />
    <ProductHeader />
    <ProductButton />
    <ProductImgDestaque />
    </>)
}

export default ProductDestaque;