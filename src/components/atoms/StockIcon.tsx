import React, { FC } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon'
import { Stock } from '../../ducks/stocks/types'
import './StockIcon.scss'

interface StockIconProps {
  stocks: Stock[]
}

const StockIcon: FC<StockIconProps> = ({ stocks }) => (
  <Link to="/stocks">
    <div className="stockIcon">
      <Icon className="materialIcon">inbox</Icon>
      <div className="stockLabel">読む</div>
      <div className="stockCount">{ stocks.length }</div>
    </div>
  </Link>
)

export default StockIcon