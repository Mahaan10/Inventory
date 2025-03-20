import { createContext, useContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [categories, setCategories] = useLocalStorage("category", []);
  const [products, setProducts] = useLocalStorage("products", []);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [search, setSearch] = useState("");
  const [categorySort, setCategorySort] = useState("All");

  // Update filteredProducts when products, sort, or search change
  useEffect(() => {
    // Filter products by search keyword
    const filterSearchTitle = (array) => {
      return array.filter((product) =>
        product.title.toLowerCase().includes(search)
      );
    };

    // Sort products by date
    const sortByDate = (array) => {
      return [...array].sort((a, b) => {
        return sort === "latest"
          ? new Date(b.createdAt) - new Date(a.createdAt)
          : new Date(a.createdAt) - new Date(b.createdAt);
      });
    };
    // Sort products by Category
    const sortByCategory = (array) => {
      if (categorySort === "All") return array;
      return array.filter((product) => product.category === categorySort);
    };

    let result = products;
    result = filterSearchTitle(result);
    result = sortByDate(result);
    result = sortByCategory(result);
    setFilteredProducts(result);
  }, [products, sort, search, categorySort]);

  // Handler for search input
  const searchHandler = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
  };

  // Handler for sort input
  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const categorySortHandler = (e) => {
    setCategorySort(e.target.value);
  };
  return (
    <ProductsContext.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        filteredProducts,
        sort,
        search,
        sortHandler,
        searchHandler,
        categorySortHandler,
        categorySort,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
