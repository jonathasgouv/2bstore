import { FC, useEffect, useState } from 'react'
import Slider, { Settings as SliderSettings }  from "react-slick";
import { getProductsByCollection } from '../../helpers/vtex';

import './shelf.scss'
import Product from './product';

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
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="shelfWrapper">
            {title && <h3 className="shelfTitle">{title}</h3>}
            <Slider {...settings} className="shelfCarousel">
                {products.map(product => <Product product={product} key={product.productId} />)}
            </Slider>
        </div>
    )
}

export default Shelf