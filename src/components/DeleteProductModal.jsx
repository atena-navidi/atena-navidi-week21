
//next-admin-panel/src/components/DeleteProductModal.jsx
// next-admin-panel/src/components/DeleteProductModal.jsx
import Modal from "./Modal";
import Image from "next/image";


const DeleteProductModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <div className="mx-auto mb-4 w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
          <Image
            src="/assets/Close.svg"
            alt="close icon"
            width={24}
            height={24}
          />
        </div>

        <p className="mb-6">آیا از حذف این محصول مطمئنید؟</p>

        <div className="flex gap-3">
          <button
            onClick={onConfirm}
            className="flex-1 bg-red-500 text-white rounded-xl py-2"
          >
            حذف
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 rounded-xl py-2"
          >
            لغو
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteProductModal;
