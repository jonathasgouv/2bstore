import { FC, useState } from 'react'
import { Link } from 'react-router-dom';
import Price from '../price';
import SizeSelector from '../sizeSelector';
import AddToCart from '../addToCart';
import use2BStore from '../../stores/2bStore';

interface IProduct {
    product: Product
}

const Product: FC<IProduct> = ({ product }) => {
    const orderForm = use2BStore(state => state.orderForm)
    const [selectedSku, setSelectedSKU] = useState(product.items[0].itemId)
    const [sku] = product.items
    const [image] = sku.images
    const highlights = product.clusterHighlights
    const { ListPrice, Price: SellingPrice } = sku.sellers[0].commertialOffer

    const discount = (ListPrice > SellingPrice) ? Math.round(100 * (1 - (SellingPrice / ListPrice))) : 0

    return (
        <div className="productItem" key={sku.itemId}>
            <div className="productFlags">
                {discount > 0 && <p className="productDiscount">{`-${discount}%`}</p>}
                {Object.keys(highlights).map(key => <p className="productHighlight">{highlights[key]}</p>)}
            </div>

            <img className="productImage" src={image.imageUrl} alt="Imagem do produto" />

            <SizeSelector product={product} onSelect={(sku) => setSelectedSKU(sku)} />

            <Link className="productTitle" to={`/${product.linkText}/p?sku=${selectedSku}`}>
                {sku.name}
            </Link>

            <Price item={sku} />

            {orderForm && <AddToCart sku={selectedSku} seller={sku.sellers[0].sellerId} orderFormId={orderForm.orderFormId} />}
        </div>
    )
}

export default Product