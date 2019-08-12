import React, { FC, useEffect, useState } from 'react'
import interact from 'interactjs'
import classNames from 'classnames'
import './index.scss';

const TopPage: FC<{}> = () => {
  const interactMaxRotation: number = 15
  const interactOutOfSightXCoordinate: number = 500
  const interactOutOfSightYCoordinate: number = 600
  const interactYThreshold: number = 150
  const interactXThreshold: number = 10

  // state
  const [ interactPosition, setInteractPosition] = useState({ x: 0, y: 0, rotation: 0 })
  const [ isInteractAnimating, setIsInteractAnimating] = useState(true)
  const [ isShowing, setIsShowing] = useState(true)
  const [ test, setTest ] = useState(false)

  // functions
  const resetCardPosition = () => {
    console.log('reset')
    setInteractPosition({ x: 0, y: 0, rotation: 0 })
  }

  const transformString = () => {
    if (!isInteractAnimating) {
      const { x, y, rotation } = interactPosition
      return `translate3D(${x}px, ${y}px, 0) rotate(${rotation}deg)`
    }
    // return `translate3D(0px, 0px, 0) rotate(0deg)`
    return undefined
  }

  const cardClassNames = classNames('card', { 'isAnimating' : isInteractAnimating })

  useEffect(() => {
    console.log(test)
    setTest(true)
    console.log(test)


    const element = document.getElementsByClassName('card')[0]
    interact(element).draggable({
      onstart: () => {
        console.log('onstart')
        setIsInteractAnimating(false)
      },
      onmove: (event: any) => {
        console.log('onmove')
        console.log(interactPosition)

        let rotation = interactMaxRotation * (interactPosition.x + event.dx / interactXThreshold)

        if (rotation > interactMaxRotation) rotation = interactMaxRotation
        else if (rotation < -interactMaxRotation) rotation = -interactMaxRotation
        // setInteractPosition({ x , y, rotation })
        setInteractPosition(interactPosition => {
          return {
            x: interactPosition.x + event.dx,
            y: interactPosition.y + event.dy,
            rotation
          }
        })
      },
      onend: () => {
        console.log('onend')
        const { x, y } = interactPosition
        setIsInteractAnimating(true)

        if (x > interactXThreshold) console.log('good')
        else if (x < -interactXThreshold) console.log('bad')
        else resetCardPosition()
      },
    })
  }, [])

  return (
    <div className="mainContainer">
      <h1 className="title">Hello World</h1>
      <div className="headingContainer" onClick={ () => setInteractPosition({x: 100, y: 100, rotation: 10})}>
        エンタメ
      </div>
      <div className="cardsContainer" onClick={ () => console.log(interactPosition)}>
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