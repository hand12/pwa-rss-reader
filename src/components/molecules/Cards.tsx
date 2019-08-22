import React, { FC, useState, useEffect } from 'react'
import Icon from '@material-ui/core/Icon'
import classNames from 'classnames'
import { CardType } from '../atoms/Card'
import Card from '../atoms/Card'
import './Cards.scss'

interface CardsProps {
  cards: CardType[]
  swipeCard(id: string): void
}

const Cards: FC<CardsProps> = ({ cards, swipeCard }) => {

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
    console.log('created')
  }, [])

  const leftLabelClassNames = classNames('label', { 'isDisplay' : isDisplayLeftLabel })
  const rightLabelClassNames = classNames('label', { 'isDisplay' : isDisplayRightLabel })

  return (
    <div className="mainContainer">
      <div className="cardsContainer">
        <div className="cards">
          {
            cards.map(card => (
              <Card card={ card } key={ card.id } setDisplayLabel={ (direct) => setDisplayLabel(direct) } swipeCard={ (id: string) => swipeCard(id) } />
            ))
          }
        </div>
        <div className="labelContainer">
          <span className={leftLabelClassNames}>スキップ</span>
          <span className={rightLabelClassNames}>読む</span>
        </div>
      </div>
    </div>
  )
}

export default Cards