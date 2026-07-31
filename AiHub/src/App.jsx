import { ToastContainer, toast } from "react-toastify";
import { Suspense, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import "./index.css";

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Model from "./components/AiModel/Model";
import Cart from "./components/AiModel/Cart";
import About from "./components/About";

function App() {
  const getModel = async () => {
    const res = await fetch("./AiData.json");
    return res.json();
  };

  const modelPromise = getModel();

  const [modelCard, setModelCard] = useState("Model");
  const [cart, setCart] = useState([]);

  // Add Model
  const handleAddToCart = (model) => {
    const exists = cart.find((item) => item.id === model.id);

    if (exists) {
      toast.warning("Model already selected!");
      return;
    }

    setCart([...cart, model]);
    toast.success("Model Added Successfully!");
  };

  // Remove Model
  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((item) => item.id !== id);
    setCart(remaining);

    toast.info("Model Removed!");
  };

  return (
    <>
      <NavBar />
      <Banner />
      <About/>

      <div className="flex justify-center gap-3 my-8" id ="services">
        <button
          onClick={() => setModelCard("Model")}
          className={`px-6 py-3 rounded-full font-semibold transition ${
            modelCard === "Model"
              ? "bg-orange-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Model
        </button>

        <button
          onClick={() => setModelCard("Cart")}
          className={`px-6 py-3 rounded-full font-semibold transition ${
            modelCard === "Cart"
              ? "bg-orange-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Cart ({cart.length})
        </button>
      </div>

      {modelCard === "Model" ? (
        <Suspense fallback={<h2>Loading...</h2>}>
          <Model
            modelPromise={modelPromise}
            handleAddToCart={handleAddToCart}
          />
        </Suspense>
      ) : (
        <Cart
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      )}

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;