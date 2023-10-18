import { OrderForm } from "../typings/orderform"

export const getOrderFormById = async (orderFormId: string): Promise<OrderForm | undefined> => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL
        const response = await fetch(`${baseUrl}/api/checkout/pub/orderForm/${orderFormId}`)
        const data = await response.json() as OrderForm
    
        return data
    } catch (_) {
        return undefined    
    }
}

export const getProductsByCollection = async (collectionId: number, numberOfItems: number = 16): Promise<Product[]> => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL
        const response = await fetch(`${baseUrl}/api/catalog_system/pub/products/search?fq=productClusterIds:${collectionId}&_from=1&_to=${numberOfItems}`)
        const data = await response.json() as Product[]
    
        return data
    } catch (_) {
        return []
    }
}