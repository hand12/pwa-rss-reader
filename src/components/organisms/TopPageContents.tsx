import React, { FC, useEffect, useState } from 'react'
import { Card } from '../../ducks/cards/types'
import Cards from '../molecules/Cards'
import './TopPageContents.scss';

interface TopPageContentsProps {
  getFeeds(genre: string): void,
  cards: Card[]
}

const TopPageContents: FC<TopPageContentsProps> = ({ getFeeds, cards }) => {

  useEffect(() => {
    getFeeds('genre')
  }, [])

  return (
    <div className="mainContents">
      <div className="cardsContents">
        <Cards cards={ cards } />
      </div>
    </div>
  )
}

export default TopPageContents