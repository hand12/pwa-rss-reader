import React, { FC } from 'react'
import { Stock } from '../../ducks/stocks/types'
import StockIcon from '../atoms/StockIcon'
import './StocksIconContents.scss'

interface StocksIconContentsProps {
  stocks: Stock[]
}

const StocksIconContents: FC<StocksIconContentsProps> = ({ stocks }) => (
  <div className="stocksIconContents">
    <StockIcon stocks={ stocks } />
  </div>
)

export default StocksIconContents