import { FC, useRef } from 'react'
import Slider, { Settings as SliderSettings } from "react-slick";

import './productImages.scss'

interface IProductImage {
    images: Item['images']
}

const ProductImages: FC<IProductImage> = ({ images }) => {
    const mainRef = useRef<Slider>(null)
    const navRef = useRef<Slider>(null)

    const settingsMain: SliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    const settingsNav: SliderSettings = {
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        vertical: true
    };

    return (
        <div className="productImages">
            <Slider {...settingsNav} className="productImagesNav" ref={navRef} asNavFor={mainRef && mainRef.current as Slider}>
                {images.map(image => (
                    <div className="productImage">
                        <img className="productImageElement" src={image.imageUrl} alt={image.imageText} />
                    </div>
                ))}
            </Slider>
            <Slider {...settingsMain} className="productImagesMain" ref={mainRef} asNavFor={navRef && navRef.current as Slider}>
                {images.map(image => (
                    <div className="productImage">
                        <img className="productImageElement" src={image.imageUrl} alt={image.imageText} />
                    </div>
                ))}            
            </Slider>
        </div>
    )
}

export default ProductImages