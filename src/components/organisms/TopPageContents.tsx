import React, { FC, useEffect, useState } from 'react'
import { Feed } from '../../ducks/feeds/types'
import Cards from '../molecules/Cards'
import { CardType } from '../atoms/Card'

interface TopPageContentsProps {
  getFeeds(genre: string): void,
  feeds: Feed[]
}

const TopPageContents: FC<TopPageContentsProps> = ({ getFeeds, feeds }) => {

  const [ displayCards, setDisplayCards ] = useState<CardType[]>([])

  const removeSwipedCards = (id: string) => {
    const cards = displayCards.filter((card: CardType) => card.id != id)
    setDisplayCards(cards)
  }

  useEffect(() => {
    getFeeds('genre')
  }, [])

  useEffect(() => {
    const cards = feeds.slice(0, 10).map(feed => Object.assign({}, feed, { swiped: false }))
    setDisplayCards(cards)
  }, [feeds])

  return (
    <div className="mainContents">
      <div className="cardsContents">
        <Cards cards={ displayCards } />
      </div>
    </div>
  )
}

export default TopPageContents