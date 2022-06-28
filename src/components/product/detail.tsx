import { Product } from "../../types";

const ProductDetail = ({
  item: {
    category,
    title,
    image,
    description,
    price,
    rating: { rate },
  },
}: {
  item: Product;
}) => (
  <div className="product-deteil">
    <p className="product-deteil__category">{category}</p>
    <p className="product-deteil__title">{title}</p>
    <img className="product-deteil__image" src={image} />
    <p className="product-deteil__description">{description}</p>
    <span className="product-deteil__price">${price}</span>
    <span className="product-deteil__rating">{rate}</span>
  </div>
);
export default ProductDetail;
