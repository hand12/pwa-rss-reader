import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Stocks from '../molecules/Stocks'
import Banners from '../molecules/Banners'
import { Stock } from '../../ducks/stocks/types'
import './StocksPageContents.scss'

interface StocksPageContentsProps {
  readStock(id: string): void
  removeStock(id: string): void
  stocks: Stock[]
}

const StocksPageContents: FC<StocksPageContentsProps> = ({ stocks, readStock, removeStock }) => (
  <div className="mainContents">
    <div className="stocksContents">
      <Stocks stocks={ stocks } readStock={ readStock } removeStock={ removeStock } />
    </div>
    <Banners stocks={ stocks } />
    <div className="linksContents">
      <Link to="/">
        記事一覧へ戻る
      </Link>
    </div>
  </div>
)

export default StocksPageContents