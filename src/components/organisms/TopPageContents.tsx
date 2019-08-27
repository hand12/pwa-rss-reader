import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
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

export const GENRES = [
  {
    name: 'Gadget',
    label: 'ガジェット'
  },
  {
    name: 'Economy',
    label: '経済'
  },
  {
    name: 'Technology',
    label: 'テクノロジー'
  },
  {
    name: 'Global',
    label: '海外'
  }
]

const TopPageContents: FC<TopPageContentsProps> = ({ getFeeds, addStock, cards, stocks }) => {
  const getCards = (genre: string) => {
    if (GENRES.some(g => g.name === genre)) { getFeeds(genre!) }
    else getFeeds('Gadget')
  }

  useEffect(() => {
    const param = new URLSearchParams(window.location.search)
    const genre = param.get('genre') || 'Gadget'
    getCards(genre)
  }, [])

  return (
    <div className="mainContents">
      <div className="cardsContents">
        <Cards cards={ cards } addStock={ addStock } />
      </div>
      <div className="stocksIconContents">
        <StockIcon stocks={ stocks } />
      </div>
      <div className="genreListContents">
        <Link to="?genre=Gadget" onClick={ () => getCards('Gadget') }>ガジェットのニュースを探す</Link>
        <Link to="?genre=Economy" onClick={ () => getCards('Economy') }>経済のニュースを探す</Link>
        <Link to="?genre=Technology" onClick={ () => getCards('Technology') }>テクノロジーのニュースを探す</Link>
        <Link to="?genre=Global" onClick={ () => getCards('Global') }>海外のニュースを探す</Link>
      </div>
    </div>
  )
}

export default TopPageContents