import { FC, useState } from 'react'
import { Link } from 'react-router-dom';
import Price from '../price';
import SizeSelector from '../sizeSelector';

interface IProduct {
    product: Product
}

const Product: FC<IProduct> = ({ product }) => {
    const [productUrl, setProductUrl] = useState(`/${product.linkText}/p`)
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

            <SizeSelector product={product} onSelect={(sku) =>setProductUrl(`/${product.linkText}/p?sku=${sku}`)} />

            <Link className="productTitle" to={productUrl}>
                {sku.name}
            </Link>

            <Price item={sku} />
        </div>
    )
}

export default Product