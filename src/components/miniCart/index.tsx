import { FC } from 'react'

import './miniCart.scss'
import use2BStore from '../../stores/2bStore'
import Item from './item'

const MiniCart: FC = () => {
    const { isOpen, toggleMiniCart, orderForm } = use2BStore(state => {
        return {
            isOpen: state.isMiniCartOpen,
            toggleMiniCart: state.toggleMiniCart,
            orderForm: state.orderForm
        }
    })

    if (!orderForm) return null

    const { format } = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

    return (
        <div className={`miniCartWrapper ${isOpen ? 'open' : ''}`}>
            <aside className="miniCart">
                <div className="miniCartHeader">
                    <p className="miniCartTitle">Meu Carrinho</p>
                    <span className="miniCartCloseBtn" onClick={toggleMiniCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11.828" height="11.828" viewBox="0 0 11.828 11.828">
                            <g id="close" transform="translate(-12.086 -12.086)">
                                <g id="Icon_feather-x-circle" data-name="Icon feather-x-circle">
                                    <path id="Caminho_689" data-name="Caminho 689" d="M22.5,13.5l-9,9" fill="none" stroke="#110d2f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <path id="Caminho_690" data-name="Caminho 690" d="M13.5,13.5l9,9" fill="none" stroke="#110d2f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                </g>
                            </g>
                        </svg>
                    </span>
                </div>
                <div className="miniCartBody">
                    {orderForm.items.length ? (
                        orderForm.items.map((item, index) => (
                            <Item item={item} index={index} key={item.id} />
                        ))
                    ) : (
                        <div className="miniCartBodyEmpty">
                            <p className="miniCartBodyEmptyTitle">Sua sacola está vazia!</p>
                            <p className="miniCartBodyEmptyText">Continue navegando em nossa loja para descobrir promoções e os melhores produtos!</p>
                            <button className="miniCartBuyBtn" onClick={toggleMiniCart}>
                                Continuar comprando
                            </button>
                        </div>
                    )}
                </div>
                {!!orderForm.items.length && (
                    <div className="miniCartFooter">
                        <div className="miniCartPrice">
                            <span className="miniCartPriceSubtotal">Subtotal</span>
                            <p className="miniCartPriceSubtotalValue">{format(orderForm.value / 100)}</p>
                        </div>
                        <a href={`${import.meta.env.VITE_BASE_URL_NO_PROXY}/checkout/?orderFormId=${orderForm.orderFormId}#/email`} target="_blank" className="miniCartBuyBtn">
                            Finalizar compra
                        </a>
                    </div>
                )}
            </aside>
        </div>
    )
}

export default MiniCart