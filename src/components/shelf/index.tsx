import { FC, useEffect, useState } from 'react'
import Slider, { Settings as SliderSettings } from "react-slick";
import { getProductsByCollection } from '../../helpers/vtex';

import './shelf.scss'
import Price from '../price';

interface IShelf {
    title?: string;
    collectionId: number;
    numberOfProducts?: number;
}

const Shelf: FC<IShelf> = ({ title, collectionId, numberOfProducts }) => {
    const [products, setProducts] = useState<Product[]>([])

    const getProducts = async (collectionId: number, numberOfProducts?: number) => {
        const products = await getProductsByCollection(collectionId, numberOfProducts)

        setProducts(products)
    }

    useEffect(() => {
        getProducts(collectionId, numberOfProducts);
    }, [collectionId, numberOfProducts])

    const settings: SliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 5000
    };

    return (
        <div className="shelfWrapper">
            {title && <h3 className="shelfTitle">{title}</h3>}
            <Slider {...settings} className="shelfCarousel">
                {products.map(product => {
                    console.log({product})
                    const [sku] = product.items
                    const [image] = sku.images
                    const highlights = product.clusterHighlights
                    const { ListPrice, Price: SellingPrice } =  sku.sellers[0].commertialOffer

                    const discount = (ListPrice > SellingPrice) ? Math.round(100 * (1 - (SellingPrice / ListPrice))) : 0

                    return (
                        <div className="productItem" key={sku.itemId}>
                            <div className="productFlags">
                                {discount && <p className="productDiscount">{`-${discount}%`}</p>}
                                {Object.keys(highlights).map(key => <p className="productHighlight">{ highlights[key] }</p>)}
                            </div>

                            <img className="productImage" src={image.imageUrl} alt="Imagem do produto"  />

                            <p className="productTitle">
                                {sku.name}
                            </p>

                            <Price item={sku} />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Shelf