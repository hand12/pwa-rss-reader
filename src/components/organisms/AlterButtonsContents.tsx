import React, { FC } from 'react'
import classNames from 'classnames'
import Icon from '@material-ui/core/Icon'
import { Stock } from '../../ducks/stocks/types'
import { Card } from '../../ducks/cards/types'
import './AlterButtonsContents.scss'

interface AlterButtonsContentsProps {
  addStock(stock: Stock): void
  swipeCard(): void
  cards: Card[]
}

const skipButtonClassNames = classNames('button', 'skip')
const stockButtonClassNames = classNames('button', 'stock')

const AlterButtonsContents: FC<AlterButtonsContentsProps> = ({ addStock, swipeCard, cards }) => {
  const clickAction = (action: string) => {
    swipeCard()

    if (action === 'skip') return
    const stock = createStock()
    addStock(stock)
  }

  const createStock = () => {
    const card = cards[0]
    return Object.assign(
      {},
      card,
      { isRead: false },
      { publishAt: new Date(card.pubDate._seconds * 1000) }
    )
  }

  return (
    <div className="alterButtonsContents">
      <div className="buttons">
        <span className={ skipButtonClassNames } onClick={ () => clickAction('skip') }>
          <Icon className="materialIcon">replay</Icon>
          <span className="label">スキップ</span>
        </span>
        <span className={ stockButtonClassNames } onClick={ () => clickAction('stock') } >
          <Icon className="materialIcon">move_to_inbox</Icon>
          <span className="label">ストック</span>
        </span>
      </div>
    </div>
  )
}

export default AlterButtonsContents