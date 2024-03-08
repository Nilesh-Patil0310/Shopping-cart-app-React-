import "./App.css";
import { useState } from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import CostomItemContext, { itemContext } from "./contex";

function App() {
  
  return (
    <CostomItemContext>
      <div className="App">
        <h2>Shopping Cart</h2>
        <Navbar />
        <Items />
      </div>
    </CostomItemContext>
  );
}
export default App;
