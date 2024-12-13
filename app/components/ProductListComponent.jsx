// components/ProductList.js
import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow p-4 flex flex-col items-center"
          >
            <img
              src={product.Img}
              alt={product.ProductName}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h2 className="text-lg font-semibold">{product.ProductName}</h2>
            <p className="text-gray-600">{product.ProductCode}</p>
            <p className="text-gray-700 font-medium">
              Price: ${product.UnitPrice}
            </p>
            <p className="text-gray-700 font-medium">Qty: {product.Qty}</p>
            <p className="text-gray-800 font-semibold">
              Total: ${product.TotalPrice}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Created: {new Date(product.CreatedDate).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
