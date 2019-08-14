import React, { FC, useEffect, useState } from 'react'
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
      </div>
    </div>
  )
}

export default Cards