import React, { FC, useEffect } from 'react'
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
        <h1>Hello World</h1>
      </div>
    </div>
  )
}

export default StocksPageContents