const ModelCard = ({ model, handleAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border flex flex-col">

      <div className="w-28 h-28 mx-auto mb-4">
        <img
          src={model.image}
          alt={model.title}
          className="w-full h-full object-contain"
        />
      </div>

      <h2 className="text-xl font-bold text-center">
        {model.title}
      </h2>

      <p className="text-gray-500 text-center mt-2 flex-1">
        {model.description}
      </p>

      <div className="flex justify-between items-center mt-5">

        <h2 className="font-bold text-orange-500">
          {model.price === 0
            ? "Free"
            : `$${model.price}/Month`}
        </h2>

        <button
          onClick={() => handleAddToCart(model)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full"
        >
          Subscribe
        </button>

      </div>

    </div>
  );
};

export default ModelCard;