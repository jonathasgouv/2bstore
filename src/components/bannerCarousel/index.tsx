import { FC } from 'react'
import Slider, { Settings as SliderSettings }   from "react-slick";
import { Link } from 'react-router-dom';

import './bannerCarousel.scss'

interface IBannerCarousel {
    images: {
        desktop: string;
        mobile: string;
        link?: string;
    }[];
}

const BannerCarousel: FC<IBannerCarousel> = ({ images }) => {
    const settings: SliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000
    };

    return (
        <Slider {...settings} className="banners bannersCarousel">
            {images.map(img => (
                <Link to={img.link || ''}>
                    <picture>
                        <source srcSet={img.desktop} media="(min-width: 768px)" />
                        <img src={img.mobile} className="bannerItem" alt="Banner" loading="eager" />
                    </picture>
                </Link>
            ))}
        </Slider>
    )
}

export default BannerCarousel