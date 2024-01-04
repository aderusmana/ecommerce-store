import { Product } from '@/types';
import {create} from 'zustand'
import React from 'react'

interface UsePreviewModalProps {
    isOpen:boolean;
    data? :Product;
    onOpen : (data:Product) => void;
    onClose : () => void;
}

const UsePreviewModal = create<UsePreviewModalProps> ((set) => ({
    isOpen :false,
    data :undefined,
    onOpen: (data:Product) => set({data, isOpen: true}) ,
    onClose : () => set({ isOpen:false})
})) 

export default UsePreviewModal