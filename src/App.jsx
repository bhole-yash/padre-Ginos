import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";
import { CartContext } from "./contexts";


const App = () => {
  return (
    <StrictMode>
      <div>
        <Header />
        <Order />
        <CartContext.Provider>
        <PizzaOfTheDay />
        </CartContext.Provider>
      
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
