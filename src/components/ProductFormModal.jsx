import { useState, useEffect } from "react";
import Modal from "./Modal";

const ProductFormModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    setForm({
      name: initialData?.name || "",
      quantity: initialData?.quantity ?? "",
      price: initialData?.price ?? "",
    });
  }, [initialData]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = () => {
    onSubmit({
      ...form,
      id: initialData?.id,
      quantity: form.quantity !== "" ? Number(form.quantity) : 0,
      price: form.price !== "" ? Number(form.price) : 0,
    });

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-center mb-6">
        {initialData ? "ویرایش محصول" : "ایجاد محصول جدید"}
      </h2>

      <div className="space-y-4">
        <label>
          نام کالا
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="نام کالا"
            className="w-full p-3 bg-gray-100 rounded-xl text-right"
          />
        </label>

        <label>
          تعداد موجودی
          <input
            name="quantity"
            type="number"
            value={form.quantity}
            onChange={handleChange}
            placeholder="تعداد موجودی"
            className="w-full p-3 bg-gray-100 rounded-xl text-right"
          />
        </label>

        <label>
          قیمت
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            placeholder="قیمت"
            className="w-full p-3 bg-gray-100 rounded-xl text-right"
          />
        </label>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={onClose}
          className="flex-1 bg-gray-200 rounded-xl py-2"
        >
          انصراف
        </button>

        <button
          onClick={submitHandler}
          className="flex-1 bg-blue-500 text-white rounded-xl py-2"
        >
          {initialData ? "ذخیره" : "ایجاد"}
        </button>
      </div>
    </Modal>
  );
};

export default ProductFormModal;


