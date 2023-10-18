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
        <BannerCarousel images={[Banner, Banner, Banner]}/>

        <div className="globalContainer">
            <Shelf collectionId={142} title="LANÇAMENTOS" />

            <ImageRow images={
                [
                    {url: BannerCamisetas, redirectTo: '/'},
                    {url: BannerCanecas},
                    {url: BannerSqueeze},
                    {url: BannerBottons}
                ]
            }/>
        </div>
    </main>
  )
}

export default Home