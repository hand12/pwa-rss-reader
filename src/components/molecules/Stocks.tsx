import React, { FC } from 'react'
import { Stock as StockType } from '../../ducks/stocks/types'
import Stock from '../atoms/Stock'
import './Stocks.scss'

interface StocksProps {
  readStock(id: string): void
  stocks: StockType[]
}

const Stocks: FC<StocksProps> = ({ stocks, readStock }) => {

  return (
    <div className="mainContainer">
      <div className="stocksContainer">
        <div className="stocks">
          {
            stocks.map(stock => (
              <Stock stock={ stock } key={ stock.id } readStock={ readStock }/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Stocks