import { FC } from 'react'

import './loading.scss'

interface ILoading {
    size?: string
}

const Loading: FC<ILoading> = ({ size }) => {
  return (
    <span className="loader" style={{width: size, height: size }}></span>
  )
}

export default Loading