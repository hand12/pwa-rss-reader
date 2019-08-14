import React, { FC, useState } from 'react'
import Icon from '@material-ui/core/Icon'
import classNames from 'classnames'
import Card from '../atoms/Card'
import './Cards.scss';

const Cards: FC<{}> = () => {

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

  const leftLabelClassNames = classNames('label', { 'isDisplay' : isDisplayLeftLabel })
  const rightLabelClassNames = classNames('label', { 'isDisplay' : isDisplayRightLabel })

  return (
    <div className="mainContainer">
      <div className="cardsContainer">
        <div className="cards">
          <Card setDisplayLabel={(direct) => setDisplayLabel(direct) } />
        </div>
        <div className="labelContainer">
          <Icon className={leftLabelClassNames}>close</Icon>
          <Icon className={rightLabelClassNames}>radio_button_unchecked</Icon>
        </div>
      </div>
    </div>
  )
}

export default Cards