import React, { FC, useState, useEffect } from 'react'
import classNames from 'classnames'
import { Stock } from '../../ducks/stocks/types'
import './Stocks.scss'

interface StocksProps {
  stocks: Stock[]
}

const Stocks: FC<StocksProps> = ({ stocks }) => {

  return (
    <div className="mainContainer">
      <div className="stocksContainer">
        <div className="stocks">
          <div className="stock">
            Hellow Stocks
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stocks