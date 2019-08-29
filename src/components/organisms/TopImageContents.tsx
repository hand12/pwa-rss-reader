import React, { FC } from 'react'
import TopImage from '../../assets/images/topImage.jpg'
import './TopImageContents.scss'

const TopImageContents: FC<{}> = () => (
  <div className="topImageContents">
    <img src={ TopImage } />
  </div>
)

export default TopImageContents