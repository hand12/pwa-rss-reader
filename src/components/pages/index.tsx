import React, { FC } from 'react'
import './index.scss';

import Cards from '../molecules/Cards'

const TopPage: FC<{}> = () => {
  return (
    <div className="mainContainer">
      <div className="cardsContainer">
        <Cards />
      </div>
    </div>
  )
}

export default TopPage