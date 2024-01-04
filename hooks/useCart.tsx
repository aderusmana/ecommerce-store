import { Product } from '@/types';
import {create} from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware';
import toast from 'react-hot-toast';

interface UseCartProps {
    items: Product[];
    addItem : (data:Product) => void;
    removeItem : (id:string) => void;
    removeAll : () => void
}

const UseCart = create(
    persist<UseCartProps>((set, get) => ({
        items : [],
        addItem : (data:Product) => {
            const currentItems = get().items;
            const existingTime = currentItems.find((item) => item.id === data.id)
           
            if(existingTime){
                return toast("Item already in Cart")
            }

           set({items : [...get().items, data]});
           toast.success("Item added to Cart");
        },
        removeItem : (id:string) => {
            set({ items: [...get().items.filter((item) => item.id !== id)]});
            toast.success("Item Removed from the Cart.");
            
        },
        removeAll : () => set({items : []})
    }), {
        name: "cart",
        storage: createJSONStorage(() => localStorage)
    })
) 

export default UseCart