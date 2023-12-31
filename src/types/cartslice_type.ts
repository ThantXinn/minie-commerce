import { Product } from "@prisma/client";

interface CartItem extends Product{
    quantity: number,
}

export interface CartSlice_type{
    items: CartItem[],
    isLoading: boolean,
    error: Error | null
}