import { FC } from 'react'
import { Link } from "react-router-dom";

import './imageRow.scss'

interface IImage {
    url: string;
    redirectTo?: string;
    alt?: string;
}

interface IImageRow {
    images: [IImage, IImage, IImage, IImage]
}

const ImageRow: FC<IImageRow> = ({ images }) => {
  return (
    <div className="imagesRow">
        {images.map(img => {
            const hasLink = !!img.redirectTo

            if (!hasLink) return <img className='imageElm' src={img.url} alt={img.alt} key={img.url} />

            return (
                <Link className='imageLink' to={img.redirectTo as string} key={img.url}>
                    <img className='imageElm' src={img.url} alt={img.alt}  />
                </Link>
            )
        })}
    </div>
  )
}

export default ImageRow