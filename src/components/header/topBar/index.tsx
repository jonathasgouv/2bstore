import Slider, { Settings as SliderSettings }   from "react-slick";
import './tobBar.scss'

const TopBar = () => {
    const settings: SliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <Slider {...settings} className="topBar">
            <div className="topBarItem">
                <p><b>Frete Grátis</b> para compras a partir de R$199!</p>
            </div>
            <div className="topBarItem">
                <p><b>Frete Grátis</b> para compras a partir de R$199!</p>
            </div>
        </Slider>
    )
}

export default TopBar