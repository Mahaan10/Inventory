import { useProductsContext } from "../context/ProductsContext";

function Navbar() {
  const { products } = useProductsContext();

  return (
    <div className="h-20 flex items-center justify-center gap-x-4 bg-dark-wood mb-6 rounded-b-full w-[95%] md:w-lg mx-auto">
      <h1 className="md:text-xl text-sm font-bold text-slate-300">
        Inventory App
      </h1>
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-dark-khaki border-2 border-slate-300 font-bold text-slate-300">
        {products.length}
      </span>
    </div>
  );
}

export default Navbar;
