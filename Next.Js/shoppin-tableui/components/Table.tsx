"use client";

import React from "react";
import { useApi } from "../context/ApiContext";
import TableHeader from "./TableHeader";

export default function Table() {
  const { data, loading } = useApi();

  if (loading) return <div>Loading...</div>;

  // Define table headers
  const headers: string[] = [
    "S/N",
    "Image",
    "SKU",
    "Name",
    "Title",
    "Description",
    "Brand",
    "Cost Price",
    "Quantity",
    "Size",
  ];

  // Transform the API data to fit the table format
  const tableData = data.map((product) => [
    product.id,
    product.imageUrl,
    product.sku,
    product.name,
    product.title,
    product.description,
    product.brand,
    product.costPrice,
    product.quantity,
    product.size,
  ]);

  console.log("Table Data:", tableData); // Debugging log

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <h1 className="text-2xl md:text-2xl font-medium mx-4 sm:mx-36 md:mx-32 py-8 text-center sm:text-left">
        Department List
      </h1>
      <div className="mx-4 sm:mx-32 md:mx-28">
        <TableHeader headers={headers} data={tableData} />
      </div>
    </div>
  );
}
