import React, { FC, useEffect } from 'react'
import { Card } from '../../ducks/cards/types'
import { Stock } from '../../ducks/stocks/types'
import TopImageContents from '../organisms/TopImageContents'
import CardsContents from '../organisms/CardsContents'
import StocksIconContents from '../organisms/StocksIconContents'
import GenreListContents from '../organisms/GenreListContents'
import NotificationContents from '../organisms/NotificationContents'
import AlterButtonsContents from '../organisms/AlterButtonsContents'
import GENRES from '../../utils/genres'
import './TopPageContents.scss'

interface TopPageContentsProps {
  getFeeds(genre: string): void,
  addStock(stock: Stock): void,
  swipeCard(): void,
  cards: Card[],
  stocks: Stock[]
  feeds: {
    loading: boolean
  }
}

const selectedGenre = () => {
  const param = new URLSearchParams(window.location.search)
  const genreParam = param.get('genre') || 'Gadget'
  return GENRES.find(g => g.name === genreParam) || GENRES[0]
}

const TopPageContents: FC<TopPageContentsProps> = ({ getFeeds, addStock, swipeCard, cards, stocks, feeds }) => {
  const getCards = (genre: string) => {
    if (GENRES.some(g => g.name === genre)) { getFeeds(genre!) }
    else getFeeds('Gadget')
  }

  useEffect(() => {
    const genre = selectedGenre()
    getCards(genre.name)
  }, [])

  return (
    <div className="mainContents">
      <TopImageContents />
      <GenreListContents getCards={ (genre) => getCards(genre) } selectedGenre={ selectedGenre() } />
      <CardsContents
        feeds={ feeds }
        cards={ cards }
        addStock={ addStock }
        swipeCard={ swipeCard } />
      <AlterButtonsContents
        cards={ cards }
        addStock={ addStock }
        swipeCard={ swipeCard }
      />
      <NotificationContents />
      <StocksIconContents stocks={ stocks } />
    </div>
  )
}

export default TopPageContents