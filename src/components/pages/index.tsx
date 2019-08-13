import React, { FC, useEffect, useState } from 'react'
import interact from 'interactjs'
import classNames from 'classnames'
import Icon from '@material-ui/core/Icon'
import './index.scss';

const TopPage: FC<{}> = () => {
  const interactMaxRotation: number = 15
  const interactOutOfSightXCoordinate: number = 300
  const interactOutOfSightYCoordinate: number = 80
  const interactXThreshold: number = 10

  // state
  const [ interactPosition, setInteractPosition] = useState({ x: 0, y: 0, rotation: 0 })
  const [ isInteractAnimating, setIsInteractAnimating] = useState(true)
  const [ isInteractDragged, setIsInteractDragged] = useState(false)
  const [ isShowing, setIsShowing] = useState(true)


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
        setInteractPosition({
          x: -interactOutOfSightXCoordinate,
          y: interactOutOfSightYCoordinate,
          rotation: -interactMaxRotation
        })
        break
      case 'RIGHT':
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
    const element = document.getElementsByClassName('card')[0]
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

  return (
    <div className="mainContainer">
      <h1 className="title" onClick={ () => console.log(interactPosition)}>Hello World</h1>
      <div className="cardsContainer">
        <div className="cards">
          <div className={cardClassNames} style={{ transform: transformString() }}>
            <div className="imageContainer">
              <img src="https://firebasestorage.googleapis.com/v0/b/with-ruit.appspot.com/o/uploads%2Farticles%2FIMG_9248.JPG_jvdz7piq_2019_5_8_0_56?alt=media&token=b0f782db-7d11-4566-9f47-434d3a434c2a" />
            </div>
            <div className="bottomContents">
              <div className="heading">
                白黒写真、色付き線を引いただけでカラー写真に？　ふしぎな錯視が発見され話題
              </div>
              <div className="postedDate">
                2019/8/12
              </div>
              <Icon>star</Icon>
            </div>
          </div>

          {/* <div className="card">
            <div className="imageContainer">
              <img src="https://firebasestorage.googleapis.com/v0/b/with-ruit.appspot.com/o/uploads%2Fplans%2FtripPhoto7.jpg_undefined_2019_3_5_23_47?alt=media&token=c590072b-4c30-4ef4-9402-f7f26db7be03" />
            </div>
            <div className="bottomContents">
              <div className="heading">
                白黒写真、色付き線を引いただけでカラー写真に？　ふしぎな錯視が発見され話題
              </div>
              <div className="postedDate">
                2019/8/12
              </div>
            </div>
          </div>

          <div className="card">
            <div className="imageContainer">
              <img src="https://firebasestorage.googleapis.com/v0/b/with-ruit.appspot.com/o/uploads%2Fplans%2Fjump_girl.jpg_undefined_2019_3_3_13_51?alt=media&token=7fadf2c9-20d2-45c8-ac98-fb60ab1ea283" />
            </div>
            <div className="bottomContents">
              <div className="heading">
                白黒写真、色付き線を引いただけでカラー写真に？　ふしぎな錯視が発見され話題
              </div>
              <div className="postedDate">
                2019/8/12
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default TopPage