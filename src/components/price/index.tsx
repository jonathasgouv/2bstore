import { FC } from 'react'
import { pickMaxInstallmentsOptionWithoutInterest } from './pickInstallments'

import './price.scss'

interface IPrice {
    item: Item
}

const Price: FC<IPrice> = ({ item }) => {
    const [seller] = item.sellers
    const { commertialOffer } = seller
    const { ListPrice, Price, Installments } = commertialOffer

    const { Value: installmentValue, NumberOfInstallments } = Object(pickMaxInstallmentsOptionWithoutInterest(Installments))

    const { format } = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

    return (
        <div className="ProductPrice">
            <div className="ProductPrices">
                {(ListPrice && ListPrice > Price) && <p className="ProductListPrice"><s>{format(ListPrice)}</s></p>}
                <p className="ProductBestPrice">{format(Price)}</p>
            </div>
            {installmentValue && <p className="ProductInstallments">Em até {NumberOfInstallments}x de <span>{format(installmentValue)}</span></p>}
        </div>
    )
}

export default Price