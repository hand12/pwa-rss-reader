import React, { FC, useEffect } from 'react'
import Icon from '@material-ui/core/Icon'
import { Stock } from '../../ducks/stocks/types'
import './StockIcon.scss'

interface StockIconProps {
  stocks: Stock[]
}

const StockIcon: FC<StockIconProps> = ({ stocks }) => (
  <div className="stockIcon">
    <Icon className="materialIcon">inbox</Icon>
    <div className="stockLabel">読む</div>
    <div className="stockCount">{ stocks.length }</div>
  </div>
)

export default StockIcon