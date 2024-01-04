"use client";
import React, { useEffect, useState } from "react";
import Button from "./ui/button";
import { ShoppingBag } from "lucide-react";
import UseCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";

const NavbarAction = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter()
  const cart = UseCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center justify-between gap-x-4 ">
      <Button onClick={() => router.push("/cart")} className="flex items-center rounded-full bg-black px-4 py-2">
        <div className="flex items-center">
          <ShoppingBag size={20} color="white" />
          <span className="ml-2 text-sm font-medium text-white">
            {cart.items.length}
          </span>
        </div>
      </Button>
    </div>
  );
};

export default NavbarAction;
