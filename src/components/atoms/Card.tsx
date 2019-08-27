import React, { FC, useEffect, useState } from 'react'
import interact from 'interactjs'
import classNames from 'classnames'
import Moment from 'react-moment'
import { Card as CardType } from '../../ducks/cards/types'
import { Stock } from '../../ducks/stocks/types'
import { GENRES } from '../organisms/TopPageContents'
import './Card.scss';

interface CardProps {
  card: CardType
  setDisplayLabel: (direct: string) => void
  swipeCard(id: string): void
  addStock(stock: Stock): void,
}

const PROVIDERS = [
  {
    name: 'gizmodo',
    label: 'GIZMODE'
  },
  {
    name: 'gadgetTsushin',
    label: 'ガジェット通信'
  },
  {
    name: 'toyokeizai',
    label: '東洋経済'
  },
  {
    name: 'cnn',
    label: 'CNN'
  },
  {
    name: 'cnet',
    label: 'CNET'
  },
  {
    name: 'techCrunch',
    label: 'TechCrunch'
  }
]

const Card: FC<CardProps> = ({ setDisplayLabel, card, swipeCard, addStock }) => {
  const interactMaxRotation: number = 15
  const interactOutOfSightXCoordinate: number = 300
  const interactOutOfSightYCoordinate: number = 80
  const interactXThreshold: number = 10

  const [ interactPosition, setInteractPosition] = useState({ x: 0, y: 0, rotation: 0 })
  const [ isInteractAnimating, setIsInteractAnimating] = useState(true)
  const [ isInteractDragged, setIsInteractDragged] = useState(false)

  const transformString = () => {
    if (!isInteractAnimating || isInteractDragged) {
      const { x, y, rotation } = interactPosition
      return `translate3D(${x}px, ${y}px, 0) rotate(${rotation}deg)`
    }
    return undefined
  }

  const convertGenre = () => {
    const genre = GENRES.find(g => g.name === card.genre)

    if (!genre) return 'No Category'
    return genre.label
  }

  const convertProvider = () => {
    const provider = PROVIDERS.find(p => p.name === card.provider)

    if (!provider) return 'No Provider'
    return provider.label
  }

  const createStock = () => {
    const stock = Object.assign(
      {},
      card,
      { isRead: false },
      { publishAt: new Date(card.pubDate._seconds * 1000) }
    )
    return stock
  }

  const swipe = (direct: string) => {
    const element = document.getElementById(card.id)
    if (!element) return

    interact(element).unset()

    switch(direct) {
      case 'LEFT':
        swipeCard(card.id)
        setInteractPosition({
          x: -interactOutOfSightXCoordinate,
          y: interactOutOfSightYCoordinate,
          rotation: -interactMaxRotation
        })
        break
      case 'RIGHT':
        swipeCard(card.id)
        setInteractPosition({
          x: interactOutOfSightXCoordinate,
          y: interactOutOfSightYCoordinate,
          rotation: interactMaxRotation
        })
        const stock = createStock()
        addStock(stock)
        break
    }
  }

  const cardClassNames = classNames('card', { 'isAnimating' : isInteractAnimating })

  useEffect(() => {
    const element = document.getElementById(card.id)
    if (!element) return

    interact(element).draggable({
      onstart: () => {
        setIsInteractAnimating(false)
      },
      onmove: (event: any) => {
        setInteractPosition(interactPosition => {
          const x = interactPosition.x + event.dx
          const y = interactPosition.y + event.dy
          let rotation = interactMaxRotation * (x / interactXThreshold)

          if (rotation > interactMaxRotation) rotation = interactMaxRotation
          else if (rotation < -interactMaxRotation) rotation = -interactMaxRotation

          return { x, y, rotation }
        })
      },
      onend: () => {
        setIsInteractDragged(true)
        setIsInteractAnimating(true)
        setInteractPosition(interactPosition => {
          const { x } = interactPosition
          if (x > interactXThreshold) swipe('RIGHT')
          else if (x < -interactXThreshold) swipe('LEFT')
          return { x: 0, y: 0, rotation: 0 }
        })
      },
    })
  }, [])

  useEffect(() => {
    const { x } = interactPosition
    if (x > interactXThreshold) setDisplayLabel('RIGHT')
    else if (x < -interactXThreshold) setDisplayLabel('LEFT')

  }, [interactPosition.x])

  return (
    <div className={ cardClassNames } id={ card.id } style={{ transform: transformString() }}>
      <div className="imageContainer">
        { card.image ? <img src={ card.image } /> : <span className="noImage">No Image </span> }
      </div>
      <div className="bottomContents">
        <div className="providerInfo">
          <div className="genre">{ convertGenre() }</div>
          <div className="provider">{ convertProvider() }</div>
        </div>
        <div className="heading">
          { card.title }
        </div>
        <div className="postedDateContents">
          <span className="postDate">
            <Moment date={ card.publishAt } format="YYYY/M/D" />
          </span>
          <span className="dateLabel">更新</span>
        </div>
      </div>
    </div>
  )
}

export default Card