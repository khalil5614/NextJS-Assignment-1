"use client";

import { useState } from "react";
//import { useRouter } from "next/router";
const page = () => {
  // const router = useRouter();
  const [formData, setFormData] = useState({
    ProductName: "",
    ProductCode: "",
    Img: "",
    UnitPrice: "",
    Qty: "",
    TotalPrice: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.ProductName || !formData.UnitPrice || !formData.Qty) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Product created successfully!");
        //    router.push("/dashboard"); // Redirect to the dashboard or product list
      } else {
        setError("Failed to create product.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Create Product</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Product Name *
          </label>
          <input
            type="text"
            name="ProductName"
            value={formData.ProductName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter product name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Product Code</label>
          <input
            type="text"
            name="ProductCode"
            value={formData.ProductCode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter product code"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="Img"
            value={formData.Img}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter image URL"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Unit Price *</label>
          <input
            type="number"
            name="UnitPrice"
            value={formData.UnitPrice}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter unit price"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Quantity *</label>
          <input
            type="number"
            name="Qty"
            value={formData.Qty}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter quantity"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Total Price</label>
          <input
            type="number"
            name="TotalPrice"
            value={formData.TotalPrice}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter total price"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default page;
