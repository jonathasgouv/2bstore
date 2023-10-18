import { FC } from 'react'
import Slider, { Settings as SliderSettings }   from "react-slick";
import './bannerCarousel.scss'

interface IBannerCarousel {
    images: string[];
}

const BannerCarousel: FC<IBannerCarousel> = ({ images }) => {
    const settings: SliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <Slider {...settings} className="banners bannersCarousel">
            {images.map(img => <img key={img} src={img} alt="bannerItem" />)}
        </Slider>
    )
}

export default BannerCarousel