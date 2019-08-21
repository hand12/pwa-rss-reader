import React, { FC, useEffect } from 'react'
import { Feed } from '../../ducks/feeds/types'
import Cards from '../molecules/Cards'

interface TopPageContentsProps {
  getFeeds(genre: string): void,
  feeds: Feed[]
}

const TopPageContents: FC<TopPageContentsProps> = ({ getFeeds, feeds }) => {

  const displayFeeds = feeds.slice(0, 10)

  useEffect(() => {
    getFeeds('genre')
  }, [])

  return (
    <div className="mainContents">
      <div className="cardsContents">
        <Cards feeds={ displayFeeds } />
      </div>
    </div>
  )
}

export default TopPageContents