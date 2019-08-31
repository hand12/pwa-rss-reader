import React, { FC, useState, useEffect } from 'react'
import classNames from 'classnames'
import { Card as CardType } from '../../ducks/cards/types'
import Card from '../atoms/Card'
import { Stock } from '../../ducks/stocks/types'
import './Cards.scss'

interface CardsProps {
  cards: CardType[],
  addStock(stock: Stock): void,
  swipeCard(): void,
}

const Cards: FC<CardsProps> = ({ cards, addStock, swipeCard }) => {

  const [ isDisplayLeftLabel, setIsDisplayLeftLabel ] = useState(false)
  const [ isDisplayRightLabel, setIsDisplayRightLabel ] = useState(false)

  const setDisplayLabel = (direct: string) => {
    switch(direct) {
      case 'LEFT':
        setIsDisplayLeftLabel(true)
        setIsDisplayRightLabel(false)
        break
      case 'RIGHT':
        setIsDisplayRightLabel(true)
        setIsDisplayLeftLabel(false)
        break
    }
  }

  useEffect(() => {
    setIsDisplayRightLabel(false)
    setIsDisplayLeftLabel(false)
  }, [cards])

  const leftLabelClassNames = classNames('label', 'skip', { 'isDisplay' : isDisplayLeftLabel })
  const rightLabelClassNames = classNames('label', 'read', { 'isDisplay' : isDisplayRightLabel })

  return (
    <div className="mainContainer">
      <div className="cardsContainer">
        <div className="cards">
          {
            cards
              .map(card => (
                <Card
                  card={ card }
                  key={ card.id }
                  setDisplayLabel={ (direct) => setDisplayLabel(direct) }
                  swipeCard={ swipeCard }
                  addStock={ addStock } />
              ))
          }
        </div>
        <div className="labelContainer">
          <span className={leftLabelClassNames}>スキップ</span>
          <span className={rightLabelClassNames}>ストック</span>
        </div>
      </div>
    </div>
  )
}

export default Cards