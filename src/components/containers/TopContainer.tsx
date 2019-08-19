import React, { FC } from 'react'

import Cards from '../molecules/Cards'

const TopContainer: FC<{}> = () => {
  return (
    <div className="mainContainer">
      <div className="cardsContainer">
        <Cards />
      </div>
    </div>
  )
}

export default TopContainer