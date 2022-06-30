import { Product } from "../../graphql/products";

const ProductDetail = ({
  item: { title, imageUrl, description, price },
}: {
  item: Product;
}) => (
  <div className="product-deteil">
    <p className="product-deteil__title">{title}</p>
    <img className="product-deteil__image" src={imageUrl} />
    <p className="product-deteil__description">{description}</p>
    <span className="product-deteil__price">${price}</span>
  </div>
);
export default ProductDetail;
