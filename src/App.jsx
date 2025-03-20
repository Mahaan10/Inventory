import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { Toaster } from "react-hot-toast";
import ProductsList from "./components/ProductsList";
import { ProductsProvider } from "./context/ProductsContext";

function App() {
  return (
    <ProductsProvider>
      <div className="bg-linear-90 from-20% to-100% from-dark-khaki to-licorice min-h-screen">
        <Toaster />
        <Navbar />
        <div className="container mx-auto p-4 md:flex-row flex-col flex md:justify-between lg:max-w-screen md:gap-x-12">
          <div className="w-full">
            <Category />
            <Products />
          </div>
          <div className="w-full">
            <ProductsList />
          </div>
        </div>
      </div>
    </ProductsProvider>
  );
}

export default App;
