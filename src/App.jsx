import { useState } from "react";
import Category from "./components/Category";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { Toaster } from "react-hot-toast";

function App() {
  const [categories, setCategories] = useState([]);

  return (
    <div className="bg-linear-90 from-20% to-100% from-[#3c2a21] to-[#1a120b] min-h-screen">
      <Toaster />
      <Navbar />
      <div className="container mx-auto p-4 md:flex-row flex-col flex md:justify-between lg:max-w-screen md:gap-x-12">
        <div className="w-full">
          <Category setCategories={setCategories} />
          <Products categories={categories} />
        </div>
        <div className="w-full">
          <Filters />
        </div>
      </div>
    </div>
  );
}

export default App;
