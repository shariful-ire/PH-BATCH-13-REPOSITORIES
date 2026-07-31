import { use } from "react";
import ModelCard from "./ModelCard";

const Model = ({ modelPromise, handleAddToCart }) => {
  const models = use(modelPromise);

  return (
    <div className="mx-auto w-[80%]">

      <div className="text-center my-8">
        <h1 className="text-4xl font-bold">
          Choose Your AI Model
        </h1>

        <p className="text-gray-500 mt-3">
          One subscription gives you access to all frontier AI models.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">

        {models.map((model) => (
          <ModelCard
            key={model.id}
            model={model}
            handleAddToCart={handleAddToCart}
          />
        ))}

      </div>

    </div>
  );
};

export default Model;