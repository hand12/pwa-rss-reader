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

  const swipeCard = (id: string) => {
    console.log('swiped!')
    const card = displayCards.find(card => card.id === id)
    if (!card) return

    card.swiped = true

    const cards = displayCards.filter(card => !card.swiped)
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
        <Cards cards={ displayCards } swipeCard={ (id: string) => swipeCard(id) }/>
      </div>
    </div>
  )
}

export default TopPageContents