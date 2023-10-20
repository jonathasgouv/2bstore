import { FC, useState } from 'react'
import Loading from '../loading';
import use2BStore from '../../stores/2bStore';
import { addSkusToCart } from '../../helpers/vtex';

import './addToCart.scss'

interface IAddToCart {
    sku: string;
    quantity?: number;
    label?: string;
    seller?: string;
    orderFormId: string;
}

const AddToCart: FC<IAddToCart> = ({ sku, quantity = 1, label = 'Comprar', seller = 1, orderFormId }) => {
    const [isLoading, setIsLoading] = useState(false)
    const { updateOrderForm, toggleMiniCart } = use2BStore((state) => {
        return {
            updateOrderForm: state.updateOrderForm,
            toggleMiniCart: state.toggleMiniCart
        }
    })

    const addSkuToCart = async () => {
        setIsLoading(true)

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
            <span style={{visibility: isLoading ? 'visible' : 'hidden'}}><Loading size='12px' /></span>
            <span style={{visibility: isLoading ? 'hidden' : 'visible'}}>{label}</span>
        </button>
    )
}

export default AddToCart