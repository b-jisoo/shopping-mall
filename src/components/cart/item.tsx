import { SyntheticEvent } from "react";
import { useMutation } from "react-query";
import { CartType, UPDATE_CART } from "../../graphql/cart";
import { getClient, grpahqlFetcher, QueryKeys } from "../../queryClient";

const CartItem = ({ id, imageUrl, price, title, amount }: CartType) => {
  const queryClient = getClient();
  const { mutate: updateCart } = useMutation(
    ({ id, amount }: { id: string; amount: number }) =>
      grpahqlFetcher(UPDATE_CART, { id, amount })
  );

  const handleUpdateAmount = (e: SyntheticEvent) => {
    const amount = Number((e.target as HTMLInputElement).value);
    updateCart({ id, amount });
    queryClient.invalidateQueries(QueryKeys.CART);
  };

  return (
    <li className="cart-item">
      <img src={imageUrl} />
      <p className="cart-item__price">{price}</p>
      <p className="crat-item__title">{title}</p>
      <input
        type="number"
        className="crat-item__amount"
        value={amount}
        onChange={handleUpdateAmount}
      />
    </li>
  );
};

export default CartItem;
