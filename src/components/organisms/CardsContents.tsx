import React, { FC } from 'react'
import { Card } from '../../ducks/cards/types'
import { Stock } from '../../ducks/stocks/types'
import Cards from '../molecules/Cards'
import Loading from '../atoms/Loading'
import './CardsContents.scss'

interface CardsContentsProps {
  cards: Card[],
  addStock(stock: Stock): void,
  feeds: {
    loading: boolean
  }
}

const CardsContents: FC<CardsContentsProps> = ({feeds, cards, addStock }) => (
  <div className="cardsContents">
    {
      feeds.loading ? <Loading /> : <Cards cards={ cards } addStock={ addStock } />
    }
  </div>
)

export default CardsContents