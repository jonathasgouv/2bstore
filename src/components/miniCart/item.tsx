import { FC } from 'react'
import { OrderFormItem } from '../../typings/orderform'
import Quantity from './quantity'
import use2BStore from '../../stores/2bStore'
import { updateSkusOnCart } from '../../helpers/vtex'
import { Link } from 'react-router-dom'

interface IItem {
    item: OrderFormItem,
    index: number
}

const Item: FC<IItem> = ({ item, index }) => {
    const { updateOrderForm, orderForm, toggleMiniCart } = use2BStore(state => {
        return {
            updateOrderForm: state.updateOrderForm,
            toggleMiniCart: state.toggleMiniCart,
            orderForm: state.orderForm
        }
    })

    const size = item.skuName.split(' ').slice(-1)[0]
    const name = item.skuName.replace(size, '')
    const hasListPrice = item.listPrice > item.sellingPrice
    const isUnavailable = item.availability !== 'available'

    const { format } = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

    const updateItemQuantity = async (quantity: number) => {
        console.log({ quantity })
        const itemInfo = [{
            quantity,
            index
        }]

        const newOrderForm = await updateSkusOnCart(itemInfo, orderForm?.orderFormId as string)

        if (newOrderForm) updateOrderForm(newOrderForm)
    }

    return (
        <div className={`miniCartItem ${isUnavailable ? 'unavailable' : ''}`}>
            <div className="miniCartItemImage">
                <img className="miniCartItemImageElement" src={item.imageUrl} alt="Imagem do produto" />
            </div>
            <div className="miniCartItemInfo">
                <div className="miniCartItemNameInfo">
                    <Link to={`${item.detailUrl}?sku=${item.id}`} onClick={toggleMiniCart}>
                        <p className="miniCartItemName">
                            {name}
                        </p>
                    </Link>

                    <span className="miniCartItemRemove" onClick={() => updateItemQuantity(0)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15.4" height="17" viewBox="0 0 15.4 17">
                            <g id="excluir" transform="translate(0.5 0.5)">
                                <circle id="Elipse_" data-name="Elipse " cx="0.25" cy="0.25" r="0.25" transform="translate(7 8)" fill="#f5f5f5" opacity="0" />
                                <g id="trash-2" transform="translate(-3 -2)">
                                    <path id="Caminho_529" data-name="Caminho 529" d="M3,6H17.4" transform="translate(0 -0.8)" fill="none" stroke="#110d2f" stroke-linecap="square" stroke-linejoin="round" stroke-width="1" />
                                    <path id="Caminho_530" data-name="Caminho 530" d="M15.4,5.2V16.4A1.546,1.546,0,0,1,13.914,18H6.486A1.546,1.546,0,0,1,5,16.4V5.2m2.229,0V3.6A1.546,1.546,0,0,1,8.714,2h2.971a1.546,1.546,0,0,1,1.486,1.6V5.2" transform="translate(0)" fill="none" stroke="#110d2f" stroke-linecap="square" stroke-linejoin="round" stroke-width="1" />
                                    <line id="Linha_272" data-name="Linha 272" y2="6" transform="translate(8.6 8.429)" fill="none" stroke="#110d2f" stroke-linejoin="round" stroke-width="1" />
                                    <line id="Linha_273" data-name="Linha 273" y2="6" transform="translate(11.8 8.429)" fill="none" stroke="#110d2f" stroke-linejoin="round" stroke-width="1" />
                                </g>
                            </g>
                        </svg>
                    </span>
                </div>
                <p className="miniCartItemSize">
                    Tamanho: {size}
                </p>
                <div className="miniCartItemPriceInfo">
                    <Quantity item={item} onChange={(quantity) => updateItemQuantity(quantity)} />
                    <div className="miniCartItemPrices">
                        {hasListPrice && (
                            <s className="miniCartItemPrice">
                                {format(item.listPrice / 100)}
                            </s>
                        )}
                        <p className="miniCartItemSellingPrice">
                            {format(item.sellingPrice / 100)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item