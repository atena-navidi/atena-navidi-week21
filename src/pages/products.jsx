
// next-admin-panel/src/pages/products.jsx
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Image from "next/image";

import DashboardHeader from "../components/DashboardHeader";
import DeleteProductModal from "../components/DeleteProductModal";
import ProductFormModal from "../components/ProductFormModal";
import PrivateLayout from "../layouts/PrivateLayout";



import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/products.service";


const Products = () => {
  const queryClient = useQueryClient();

  const [selectedProduct, setSelectedProduct] = useState(undefined);
  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [search, setSearch] = useState("");

  const {
    data: productsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const products = Array.isArray(productsData) ? productsData : [];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const saveProductMutation = useMutation({
    mutationFn: (product) =>
      selectedProduct
        ? updateProduct(product.id, product)
        : createProduct(product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("عملیات موفق بود");
    },
    onError: () => toast.error("خطا در ذخیره محصول"),
  });

  const addOrUpdateProduct = (product) => {
    saveProductMutation.mutate(product);
  };

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("محصول حذف شد");
    },
    onError: () => toast.error("خطا در حذف محصول"),
  });

  const deleteProductHandler = () => {
    if (!selectedProduct) return;
    deleteProductMutation.mutate(selectedProduct.id);
    setShowDelete(false);
    setSelectedProduct(undefined);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <DashboardHeader search={search} setSearch={setSearch} />

      <div className="flex justify-between mb-4">
        <div className="flex gap-2 items-center">
          <Image src="/assets/setting.svg" alt="setting icon" className="size-7" width={28} height={28} />
          <h1 className="text-lg font-semibold">مدیریت کالا</h1>
        </div>

        <button
          onClick={() => {
            setSelectedProduct(undefined);
            setShowForm(true);
          }}
          className="bg-blue-500 text-white px-5 py-2 rounded-xl"
        >
          افزودن محصول
        </button>
      </div>

      <div className="bg-white rounded-3xl p-6">
        {isLoading && <p className="text-center py-10">در حال بارگذاری...</p>}

        {isError && (
          <p className="text-center py-10 text-red-500">
            خطا در دریافت اطلاعات
          </p>
        )}

        {!isLoading && filteredProducts.length === 0 && (
          <p className="text-center py-10 text-gray-500">
            محصولی یافت نشد
          </p>
        )}

        {!isLoading && filteredProducts.length > 0 && (
          <table className="w-full table-fixed text-right border-separate border-spacing-y-3">
            <thead>
              <tr className="text-gray-400 text-sm">
                <th className="px-4 py-3">نام کالا</th>
                <th className="px-4 py-3">موجودی</th>
                <th className="px-4 py-3">قیمت</th>
                <th className="px-4 py-3">شناسه</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((p) => (
                <tr
                  key={p.id}
                  className="bg-gray-50 hover:bg-gray-100 transition"
                >
                  <td className="py-4 px-4 font-medium">{p.name}</td>
                  <td className="px-4 py-4">{p.quantity}</td>
                  <td className="px-4 py-4">
                    {p.price.toLocaleString()} تومان
                  </td>
                  <td className="px-4 py-4 text-gray-400 text-sm">
                    {p.id}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex gap-2 justify-end">
                      <button
                        onClick={() => {
                          setSelectedProduct(p);
                          setShowForm(true);
                        }}
                        className="bg-green-100 text-green-500 p-2 rounded-lg"
                      >
                        ✏️
                      </button>

                      <button
                        onClick={() => {
                          setSelectedProduct(p);
                          setShowDelete(true);
                        }}
                        className="bg-red-100 text-red-500 p-2 rounded-lg"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <DeleteProductModal
        isOpen={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={deleteProductHandler}
      />

      <ProductFormModal
        key={selectedProduct?.id || "new"}
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={addOrUpdateProduct}
        initialData={selectedProduct || undefined}
      />
    </div>
  );
};

/* 🔐 Guard config */
Products.requiresAuth = true;

/* 🧱 Layout */
Products.getLayout = (page) => <PrivateLayout>{page}</PrivateLayout>;

export default Products;
