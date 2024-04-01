import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <>
      <div className="flex items-center p-6 w-96 justify-between bg-gray-500 mt-4 mb-4 rounded-xl shadow-2xl hover:bg-zinc-600 ml-[-250px]">
        <div className="flex">
          <img
            src={cartItem?.image}
            className="h-32 rounded-lg mr-6"
            alt={cartItem?.title}
          />
          <div className="flex flex-col justify-between">
            <h1 className="text-xl text-white font-bold mb-4">{cartItem?.title}</h1>
            <p className="text-gray-300 text-xl mb-4 font-bold">Price: Rs. {cartItem?.price}</p>
            <button
              onClick={handleRemoveFromCart}
              className="bg-gray-700  text-white border-2 rounded-lg font-bold px-6 py-3 hover:bg-gray-900 transition-colors"
            >
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
