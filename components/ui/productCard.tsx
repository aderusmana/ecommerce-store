"use client";
import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import IconButton from "./iconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {

  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`)
  }
  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]?.url}
          alt={data.name}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {handleClick}}
              icon={<Expand size={20} className="text-gray-500" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-500" />}
            />
          </div>
        </div>
      </div>

      {/* Desctription */}
      <div className="space-y-1">
        <h3 className="text-lg font-medium">{data.name}</h3>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>
      {/* Price & Actions */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;