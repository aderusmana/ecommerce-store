import { Product } from "@/types";
import React from "react";
import NoResult from "./noResult";
import ProductCard from "./ui/productCard";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="space-x-4">
      <h1>{title}</h1>
      {items.length === 0 && <NoResult />}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
