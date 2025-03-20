import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoMdRemove } from "react-icons/io";

function ConfirmDelete({ title, onClose, onConfirm }) {
  return (
    <div>
      <h2 className="font-bold mb-4 text-base text-neutral-200">
        {`Are you sure about deleting ${title} ?`}
      </h2>
      <div className="flex justify-between items-center gap-x-16">
        <button
          className="py-2 px-2 rounded-md hover:font-bold hover:scale-105 mx-auto transition-all duration-150 flex items-center justify-between flex-1 bg-red-800 text-neutral-200 cursor-pointer"
          onClick={onConfirm}
        >
          <span>Confirm</span>
          <IoCheckmarkDoneSharp className="w-5 h-5" />
        </button>
        <button
          className="py-2 px-2 rounded-md hover:font-bold hover:scale-105 mx-auto transition-all duration-150 flex items-center justify-between flex-1 bg-teal-600 text-neutral-200 cursor-pointer"
          onClick={onClose}
        >
          <span>Cancel</span>
          <IoMdRemove className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
