import React, { FC } from 'react'
import Cards from '../molecules/Cards'

const TopPageContents: FC<{}> = () => {
  return (
    <div className="mainContents">
      <div className="cardsContents">
        <Cards />
      </div>
    </div>
  )
}

export default TopPageContents