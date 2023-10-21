import { FC, useState } from 'react'
import Loading from '../loading';
import use2BStore from '../../stores/2bStore';
import { addSkusToCart, updateSkusOnCart } from '../../helpers/vtex';

import './addToCart.scss'

interface IAddToCart {
    sku: string;
    quantity?: number;
    label?: string;
    seller?: string;
    orderFormId: string;
}

const AddToCart: FC<IAddToCart> = ({ sku, quantity = 1, label = 'Comprar', seller = '1', orderFormId }) => {
    const [isLoading, setIsLoading] = useState(false)
    const orderForm = use2BStore(state => state.orderForm)
    const { updateOrderForm, toggleMiniCart } = use2BStore((state) => {
        return {
            updateOrderForm: state.updateOrderForm,
            toggleMiniCart: state.toggleMiniCart
        }
    })

    const addSkuToCart = async () => {
        setIsLoading(true)

        const isInCart = orderForm?.items.find(item => item.id === sku)
        
        // If item is already on cart, sums the current quantity with the added
        if (isInCart) {
            const skuIndex = orderForm?.items.findIndex(item => item.id === isInCart.id)

            const item = [{
                index: skuIndex as number,
                quantity: (isInCart?.quantity as number) + quantity
            }]

            const newOrderForm = await updateSkusOnCart(item, orderFormId)

            if (newOrderForm) updateOrderForm(newOrderForm)

            setIsLoading(false)
            toggleMiniCart()

            return
        }

        // If item is not on cart just adds it
        const item = [{
            id: sku,
            quantity,
            seller
        }]

        const newOrderForm = await addSkusToCart(item, orderFormId)

        if (newOrderForm) updateOrderForm(newOrderForm)

        setIsLoading(false)
        toggleMiniCart()
    }

    return (
        <button className="productAddToCart" onClick={addSkuToCart}>
            <span style={{ visibility: isLoading ? 'visible' : 'hidden' }}><Loading size='12px' /></span>
            <span style={{ visibility: isLoading ? 'hidden' : 'visible' }}>{label}</span>
        </button>
    )
}

export default AddToCart