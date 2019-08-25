import React, { FC, useEffect } from 'react'
import Stocks from '../molecules/Stocks'
import { Stock } from '../../ducks/stocks/types'
import './StocksPageContents.scss'

interface StocksPageContentsProps {
  readStock(id: string): void
  stocks: Stock[]
}

const StocksPageContents: FC<StocksPageContentsProps> = ({ stocks, readStock }) => {

  useEffect(() => {
    console.log('change stocks', stocks)
  }, [stocks])

  return (
    <div className="mainContents">
      <div className="stocksContents">
        <Stocks stocks={ stocks } readStock={ readStock } />
      </div>
    </div>
  )
}

export default StocksPageContents