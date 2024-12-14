// components/ProductList.js
import React from "react";

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="container mx-auto px-4 pb-4">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Image
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Code
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Price
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Quantity
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Total
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={product.Img ? product.Img : null}
                    alt={product.ProductName}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.ProductName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.ProductCode}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ${product.UnitPrice}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.Qty}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ${product.TotalPrice}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => onEdit(product)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(product)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
