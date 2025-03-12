import { useState } from "react";
import toast from "react-hot-toast";

function Category({ setCategories }) {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });

  const categoryFormHandler = (e) => {
    setCategoryFormData({
      ...categoryFormData,
      [e.target.name]: e.target.value,
    });
  };

  const addNewCategoryHandler = (e) => {
    e.preventDefault();
    const newCategory = {
      ...categoryFormData,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    };
    setCategories((prev) => [...prev, newCategory]);
    toast.success(`Added ${categoryFormData.title} Successfully!`);
    setCategoryFormData({ title: "", description: "" });
  };

  return (
    <section>
      <div className={`mb-6 ${isOpen ? "block" : "hidden"}`}>
        <h2 className="text-xl text-slate-200 font-bold mb-2">
          Add New Category
        </h2>
        <form className="bg-stone-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label htmlFor="title" className="block mb-1 text-slate-200">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={categoryFormData.title}
              onChange={categoryFormHandler}
              className="bg-transparent rounded-xl border border-stone-400 outline-none py-2 pl-2 text-slate-200 w-full md:w-auto"
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-1 text-slate-200">
              Description
            </label>
            <textarea
              name="description"
              id=""
              value={categoryFormData.description}
              onChange={categoryFormHandler}
              className="bg-transparent rounded-xl border border-stone-400 text-slate-200 w-full resize-none outline-none py-2 pl-2"
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              className="cursor-pointer flex-1 border border-stone-400 text-slate-200 rounded-xl py-2"
              onClick={(e) => (e.preventDefault(), setIsOpen(!isOpen))}
            >
              Cancel
            </button>
            <button
              className="cursor-pointer flex-1 text-slate-200 bg-[#876445] rounded-xl py-2"
              onClick={addNewCategoryHandler}
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <button
        className={`cursor-pointer text-slate-200 text-lg mb-4 font-medium opacity-60 ${
          isOpen && "hidden"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Add new Category?
      </button>
    </section>
  );
}

export default Category;
