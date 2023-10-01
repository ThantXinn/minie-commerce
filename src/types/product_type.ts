import { Product } from "@prisma/client"

export interface Product_type {
    items: Product[],
    isLoading: boolean,
    error: Error | null
}