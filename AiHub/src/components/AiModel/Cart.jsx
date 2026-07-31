import { FaTrash } from "react-icons/fa";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="max-w-5xl mx-auto my-10 px-5">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-bold">
          Selected Models ({cart.length})
        </h2>

        <span className="bg-orange-500 text-white px-5 py-2 rounded-full">
          Total : {cart.length}
        </span>

      </div>

      {cart.length === 0 ? (
        <div className="border rounded-xl py-20 text-center">

          <h2 className="text-3xl font-bold">
            No Model Selected
          </h2>

          <p className="text-gray-500 mt-3">
            Subscribe to your favourite AI model.
          </p>

        </div>
      ) : (
        <div className="space-y-5">

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-5 rounded-xl shadow border"
            >
              <div className="flex gap-5 items-center">

                <img
                  src={item.image}
                  className="w-20 h-20 object-contain"
                  alt=""
                />

                <div>

                  <h2 className="font-bold text-xl">
                    {item.title}
                  </h2>

                  <p className="text-gray-500">
                    {item.description}
                  </p>

                  <h3 className="text-orange-500 font-bold mt-2">
                    {item.price === 0
                      ? "Free"
                      : `$${item.price}/Month`}
                  </h3>

                </div>

              </div>

              <button
                onClick={() =>
                  handleRemoveFromCart(item.id)
                }
                className="btn btn-error btn-outline"
              >
                <FaTrash />
              </button>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Cart;