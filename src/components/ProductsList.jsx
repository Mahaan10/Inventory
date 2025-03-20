import { useProductsContext } from "../context/ProductsContext";
import Table from "./Table";
import Modal from "./Modal";
import { useState } from "react";
import EditProductForm from "./EditProductForm";
import ConfirmDelete from "./ConfirmDelete";

function ProductsList() {
  const {
    categories,
    filteredProducts,
    searchHandler,
    sortHandler,
    sort,
    search,
    categorySortHandler,
    categorySort,
    products,
    setProducts,
  } = useProductsContext();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const editHandler = (product) => {
    setProductToEdit(product);
    setIsEditModalOpen(true);
  };

  const updateProductHandler = (productToEdit) => {
    const productsToEdit = products.map((product) =>
      product.id === productToEdit.id ? productToEdit : product
    );
    setProducts(productsToEdit);
    setIsEditModalOpen(false);
  };

  const deleteHandler = (product) => {
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    const updatedProducts = products.filter(
      (product) => product.id !== productToDelete.id
    );
    setProducts(updatedProducts);
    setIsDeleteModalOpen(false);
  };
  return (
    <section>
      <div className="mb-6 ">
        <h2 className="text-xl text-slate-200 font-bold mb-2">Filters</h2>
        <form className="bg-stone-700 p-4 rounded-xl flex flex-col gap-y-[27px]">
          <div className="flex justify-between items-center gap-x-4">
            <label htmlFor="Search" className="block mb-1 text-slate-200">
              Search
            </label>
            <input
              type="text"
              name="search"
              value={search}
              onChange={searchHandler}
              className="bg-transparent rounded-xl border border-stone-400 outline-none py-2 pl-2 text-slate-200 w-full md:w-auto"
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="sort" className="block mb-1 text-slate-200">
              Sort
            </label>
            <select
              name="sort"
              value={sort}
              onChange={sortHandler}
              className="w-40 border border-stone-400 outline-none flex items-center justify-between text-slate-200 p-2 rounded-xl"
            >
              <option value="latest" className="bg-licorice text-slate-300">
                Latest
              </option>
              <option value="earliest" className="bg-licorice text-slate-300">
                Earliest
              </option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="category" className="block mb-1 text-slate-200">
              Category
            </label>
            <select
              name="category"
              value={categorySort}
              onChange={categorySortHandler}
              className="w-auto border border-stone-400 outline-none flex items-center justify-between text-slate-200 p-2 rounded-xl"
            >
              <option value="All" className="bg-licorice text-slate-300">
                All
              </option>
              {categories.map((category) => (
                <option
                  key={category.id}
                  className="bg-licorice text-slate-300"
                >
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          <button
            className="cursor-pointer flex-1 text-slate-200 bg-dark-wood rounded-xl py-2"
            onClick={(e) => e.preventDefault()}
          >
            Search
          </button>
        </form>
      </div>
      <div className="mb-6">
        <h2 className="text-xl text-slate-200 font-bold mb-2">Products List</h2>
        {filteredProducts.length > 0 && (
          <Table>
            <Table.Header>
              <th className="pl-1">#</th>
              <th className="py-1.5">Title</th>
              <th className="py-1.5">Category</th>
              <th className="py-1.5">Quantity</th>
              <th className="py-1.5">Date</th>
              <th className="py-1.5">Operations</th>
            </Table.Header>
            <Table.Body>
              {filteredProducts.map((product, index) => (
                <ProductsRow
                  key={product.id}
                  product={product}
                  index={index}
                  editHandler={editHandler}
                  deleteHandler={deleteHandler}
                />
              ))}
            </Table.Body>
          </Table>
        )}
      </div>

      {isEditModalOpen && (
        <Modal
          onClose={() => setIsEditModalOpen(false)}
          title={`Edit ${productToEdit.title}`}
        >
          <EditProductForm
            product={productToEdit}
            onSave={updateProductHandler}
          />
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal
          onClose={() => setIsDeleteModalOpen(false)}
          title={`Confirm Delete ${productToDelete.title}`}
        >
          <ConfirmDelete
            title={productToDelete.title}
            onConfirm={handleDeleteConfirm}
            onClose={() => setIsDeleteModalOpen(false)}
          />
        </Modal>
      )}
    </section>
  );
}

export default ProductsList;

const ProductsRow = ({ index, product, editHandler, deleteHandler }) => {
  return (
    <Table.Row>
      <td className="pl-1">{index + 1}</td>
      <td>{product.title}</td>
      <td>{product.category}</td>
      <td>{product.quantity}</td>
      <td>{new Date(product.createdAt).toLocaleDateString()}</td>
      <td className="flex items-center justify-center gap-x-8 py-2">
        <button
          className="cursor-pointer text-neutral-300 outline-none bg-emerald-900 py-1 px-2 rounded-lg"
          onClick={() => editHandler(product)}
        >
          Edit
        </button>
        <button
          onClick={() => deleteHandler(product)}
          className="cursor-pointer text-neutral-300 outline-none bg-red-900  py-1 px-2 rounded-lg"
        >
          Delete
        </button>
      </td>
    </Table.Row>
  );
};
