import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalCart);

  return (
    <div className="flex justify-center">
      {cart && cart.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3 space-y-3">
              {cart.map((cartItem) => (
                <CartTile cartItem={cartItem} key={cartItem.id} />
              ))}
            </div>
            <div className="w-full md:w-[300px] bg-gray-500 rounded-lg shadow-lg h-64 ml-[350px] mt-4">
              <div className="p-5 space-y-3">
                <h1 className="font-bold text-lg text-gray-100">Your Cart Summary</h1>
                <p className="text-gray-100">
                  <span className="font-bold">Total Items:</span> {cart.length}
                </p>
                <p className="text-gray-100">
                  <span className="font-bold">Total Amount:
                  </span>    {totalCart}
                </p>
                <button
                  className="bg-gray-700  text-white border-2 rounded-lg font-bold px-6 py-3 hover:bg-gray-900 transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-4">Your cart is empty</h1>
          <Link to="/">
            <button className="bg-gray-700  text-white border-2 rounded-lg font-bold px-6 py-3 hover:bg-gray-900 transition-colors">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>

  );
}
