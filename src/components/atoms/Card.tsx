import React, { FC, useEffect, useState } from 'react'
import interact from 'interactjs'
import classNames from 'classnames'
import { Feed } from '../../ducks/feeds/types'
import './Card.scss';

interface CardProps {
  card: CardType
  setDisplayLabel: (direct: string) => void
  swipeCard(id: string): void
}

export interface CardType extends Feed {
  swiped: boolean
}

const Card: FC<CardProps> = ({ setDisplayLabel, card, swipeCard }) => {
  const interactMaxRotation: number = 15
  const interactOutOfSightXCoordinate: number = 300
  const interactOutOfSightYCoordinate: number = 80
  const interactXThreshold: number = 10

  // state
  const [ interactPosition, setInteractPosition] = useState({ x: 0, y: 0, rotation: 0 })
  const [ isInteractAnimating, setIsInteractAnimating] = useState(true)
  const [ isInteractDragged, setIsInteractDragged] = useState(false)

  // functions
  const transformString = () => {
    if (!isInteractAnimating || isInteractDragged) {
      const { x, y, rotation } = interactPosition
      return `translate3D(${x}px, ${y}px, 0) rotate(${rotation}deg)`
    }
    return undefined
  }

  const swipe = (direct: string) => {
    const element = document.getElementsByClassName('card')[0]
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

  useEffect(() => {
    console.log('created Card!')
    console.log(card)
  }, [card])

  return (
    <div className={cardClassNames} id={card.id} style={{ transform: transformString() }}>
      <div className="imageContainer">
        <img src={card.image} />
      </div>
      <div className="bottomContents">
        <div className="heading">
          { card.title }
        </div>
        <div className="postedDate">
          2019/8/12
        </div>
      </div>
    </div>
  )
}

export default Card