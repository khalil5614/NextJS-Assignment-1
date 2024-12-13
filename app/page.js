"use client";
import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "./utils/api";
import Link from "next/link";
import ProductList from "./components/ProductListComponent";
import EditProductModal from "./components/EditProductModal";
import { TbCategoryPlus } from "react-icons/tb";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
    console.log("Updated products", products);
  }, []);

  const fetchProducts = async () => {
    const response = await getProducts();
    const { data } = response.data;
    console.log("data", data);
    setProducts(data);
    console.log("products", products);
  };
  const handleEdit = (product) => {
    alert(`Edit product: ${product.ProductName}`);
    setSelectedProduct(product);
    setIsModalOpen(true);
    console.log("Selected Product", selectedProduct);
  };
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
      fetchProducts();
    }
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    //    setSelectedProduct(null);
  };
  const handleProductSave = (updatedProduct) => {
    console.log("Updated Product:", updatedProduct);
    // Add logic to update product in state or send to server
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex  justify-between m-2">
        <h2 className="text-2xl font-bold mb-4">All Products</h2>
        <Link className="btn btn-outline" href="/createProduct">
          <TbCategoryPlus />
          <span>Add Product</span>
        </Link>
      </div>
      <ProductList
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <EditProductModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        product={selectedProduct}
        onSave={handleProductSave}
      />
    </div>
  );
}
