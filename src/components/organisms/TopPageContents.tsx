import React, { FC } from 'react'
import Cards from '../molecules/Cards'

const TopPageContents: FC<{ getFeeds(genre: string): void }> = (props) => {
  console.log(props)
  props.getFeeds('genre')
  return (
    <div className="mainContents">
      <div className="cardsContents">
        <Cards />
      </div>
    </div>
  )
}

export default TopPageContents