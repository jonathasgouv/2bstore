import BannerCarousel from "../../components/bannerCarousel"

import Banner from '../../assets/banner_principal.png'
import BannerCamisetas from '../../assets/banner_01.png'
import BannerCanecas from '../../assets/banner_02.png'
import BannerSqueeze from '../../assets/banner_03.png'
import BannerBottons from '../../assets/banner_04.png'

import ImageRow from "../../components/imageRow"
import Shelf from "../../components/shelf"



const Home = () => {
  return (
    <main>
      <BannerCarousel images={[{ desktop: Banner, mobile: "https://fakeimg.pl/480x480/000/fff" }, { desktop: Banner, mobile: "https://fakeimg.pl/480x480/000/fff" }, { desktop: Banner, mobile: "https://fakeimg.pl/480x480/000/fff" }]} />

      <div className="globalContainer">
        <Shelf collectionId={144} title="LANÇAMENTOS" />

        <Shelf collectionId={143} title="OS MAIS VENDIDOS" />

        <ImageRow images={
          [
            { url: BannerCamisetas, redirectTo: '/' },
            { url: BannerCanecas },
            { url: BannerSqueeze },
            { url: BannerBottons }
          ]
        } />

        <Shelf collectionId={147} title="OFERTAS IMPERDÍVEIS" />
      </div>
    </main>
  )
}

export default Home