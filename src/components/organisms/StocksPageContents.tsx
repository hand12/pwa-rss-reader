import React, { FC, useEffect } from 'react'
import Stocks from '../molecules/Stocks'
import { Stock } from '../../ducks/stocks/types'
import './StocksPageContents.scss'

interface StocksPageContentsProps {
  stocks: Stock[]
}

const StocksPageContents: FC<StocksPageContentsProps> = ({ stocks }) => {

  useEffect(() => {
    console.log('change stocks', stocks)
  }, [stocks])

  return (
    <div className="mainContents">
      <div className="stocksContents">
        <Stocks stocks={ stocks } />
      </div>
    </div>
  )
}

export default StocksPageContents