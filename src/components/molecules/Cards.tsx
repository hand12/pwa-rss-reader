import React, { FC } from 'react'
import Icon from '@material-ui/core/Icon'
import Card from '../atoms/Card'
import './Cards.scss';

const Cards: FC<{}> = () => {

  return (
    <div className="mainContainer">
      <div className="cardsContainer">
        <div className="cards">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="labelContainer">
          <Icon className="label">close</Icon>
          <Icon className="label">radio_button_unchecked</Icon>
        </div>
      </div>
    </div>
  )
}

export default Cards