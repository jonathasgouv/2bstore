import { FC } from 'react'
import { OrderFormItem } from '../../typings/orderform'

interface IQuantity {
    item: OrderFormItem,
    onChange: (newQuantity: number) => void
}

const Quantity: FC<IQuantity> = ({ item, onChange }) => {
    const { format } = new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2 })

    return (
        <div className="miniCartItemQuantity">
            <span className="miniCartItemQuantityRemove" onClick={() => onChange(item.quantity - 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="1.833" viewBox="0 0 11 1.833">
                    <path id="minus" d="M10.542-5.25H.458A.458.458,0,0,0,0-4.792v.917a.458.458,0,0,0,.458.458H10.542A.458.458,0,0,0,11-3.875v-.917A.458.458,0,0,0,10.542-5.25Z" transform="translate(0 5.25)" fill="#ffccd8" />
                </svg>
            </span>
            <span className="miniCartItemQuantityCurrent">
                {format(item.quantity)}
            </span>
            <span className="miniCartItemQuantityAdd" onClick={() => onChange(item.quantity + 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                    <path id="plus" d="M10.542-4.417H6.417V-8.542A.458.458,0,0,0,5.958-9H5.042a.458.458,0,0,0-.458.458v4.125H.458A.458.458,0,0,0,0-3.958v.917a.458.458,0,0,0,.458.458H4.583V1.542A.458.458,0,0,0,5.042,2h.917a.458.458,0,0,0,.458-.458V-2.583h4.125A.458.458,0,0,0,11-3.042v-.917A.458.458,0,0,0,10.542-4.417Z" transform="translate(0 9)" fill="#e8335d" />
                </svg>
            </span>
        </div>
    )
}

export default Quantity