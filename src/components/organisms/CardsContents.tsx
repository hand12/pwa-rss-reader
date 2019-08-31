import React, { FC } from 'react'
import { Card } from '../../ducks/cards/types'
import { Stock } from '../../ducks/stocks/types'
import Cards from '../molecules/Cards'
import Loading from '../atoms/Loading'
import './CardsContents.scss'

interface CardsContentsProps {
  addStock(stock: Stock): void,
  swipeCard(): void,
  cards: Card[],
  feeds: {
    loading: boolean
  }
}

const CardsContents: FC<CardsContentsProps> = ({feeds, cards, addStock, swipeCard }) => (
  <div className="cardsContents">
    {
      feeds.loading ? <Loading /> : <Cards cards={ cards } addStock={ addStock } swipeCard={ swipeCard } />
    }
  </div>
)

export default CardsContents