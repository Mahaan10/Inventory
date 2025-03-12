import { useState } from "react";

function Products({ categories }) {
  const [productsFormData, setProductsFormData] = useState({
    title: "",
    quantity: 0,
    category: "",
  });

  const productsFormDataChangeHandler = (e) => {
    console.log(e.target.value);
    setProductsFormData({ ...productsFormData, [name]: e.target.value });
  };

  const addNewProductHandler = () => {};

  return (
    <section>
      <div className="mb-6 ">
        <h2 className="text-xl text-slate-200 font-bold mb-2">
          Add New Product
        </h2>
        <form className="bg-stone-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label htmlFor="title" className="block mb-1 text-slate-200">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="bg-transparent rounded-xl border border-stone-400 outline-none pl-2 text-slate-200 w-full md:w-auto"
              value={productsFormData.title}
              onChange={productsFormDataChangeHandler}
            />
          </div>
          <div>
            <label
              htmlFor="product-quantity"
              className="block mb-1 text-slate-200"
            >
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id=""
              className="rounded-xl bg-transparent border border-stone-400 outline-none py-1 px-2 text-slate-200 w-full md:w-auto"
              value={productsFormData.quantity}
              onChange={productsFormDataChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="category" className="block mb-1 text-slate-200">
              Category
            </label>
            <select
              name="categoryId"
              className="w-full border border-stone-400 outline-none flex items-center justify-between text-slate-200 p-2 rounded-xl"
              value={productsFormData.category}
              onChange={productsFormDataChangeHandler}
            >
              <option value="" className="bg-[#1a120b] text-slate-300">
                Select a Category
              </option>
              {categories.map((category) => (
                <option
                  key={category.id}
                  value={category.title}
                  className="bg-[#1a120b] text-slate-300"
                >
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          <button
            className="cursor-pointer flex-1 text-slate-200 bg-[#876445] rounded-xl py-2"
            onClick={addNewProductHandler}
          >
            Add New Product
          </button>
        </form>
      </div>
    </section>
  );
}

export default Products;
