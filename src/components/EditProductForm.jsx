import { useState } from "react";
import { useProductsContext } from "../context/ProductsContext";

const EditProductForm = ({ product, onSave }) => {
  const { categories } = useProductsContext();
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (e) => {
    setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(editedProduct);
      }}
      className="flex flex-col gap-4"
    >
      <label className="text-white">Title</label>
      <input
        type="text"
        name="title"
        value={editedProduct.title}
        onChange={handleChange}
        className="p-2 rounded bg-dark-khaki text-white"
      />

      <label className="text-white">Category</label>
      <select
        name="category"
        value={editedProduct.category}
        onChange={handleChange}
        className="p-2 rounded bg-dark-khaki text-white"
      >
        {categories.map((category) => (
          <option value={category.title} key={category.id}>
            {category.title}
          </option>
        ))}
      </select>

      <label className="text-white">Quantity</label>
      <input
        type="number"
        name="quantity"
        value={editedProduct.quantity}
        onChange={handleChange}
        className="p-2 rounded bg-dark-khaki text-white"
      />

      <button
        type="submit"
        className="bg-dark-wood cursor-pointer text-white py-2 rounded"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditProductForm;
