import React, { FC, useEffect } from 'react'
import { Card } from '../../ducks/cards/types'
import { Stock } from '../../ducks/stocks/types'
import Cards from '../molecules/Cards'
import StockIcon from '../atoms/StockIcon'
import './TopPageContents.scss'

interface TopPageContentsProps {
  getFeeds(genre: string): void,
  addStock(stock: Stock): void,
  cards: Card[],
  stocks: Stock[]
}

const TopPageContents: FC<TopPageContentsProps> = ({ getFeeds, addStock, cards, stocks }) => {

  useEffect(() => {
    getFeeds('genre')
  }, [])

  return (
    <div className="mainContents">
      <div className="cardsContents">
        <Cards cards={ cards } addStock={ addStock }/>
      </div>
      <div className="stocksContents">
        <StockIcon stocks={ stocks } />
      </div>
    </div>
  )
}

export default TopPageContents