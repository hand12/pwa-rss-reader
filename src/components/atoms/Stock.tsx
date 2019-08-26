import React, { FC } from 'react'
import Moment from 'react-moment'
import { Stock as StockType } from '../../ducks/stocks/types'
import './Stock.scss'

interface StockProps {
  readStock(id: string): void
  removeStock(id: string): void
  stock: StockType
}

const NotReadLabel: FC<{}> = () => (
  <div className="notReadLabel">未読</div>
)

const ReadLabel: FC<{}> = () => (
  <div className="readLabel">既読</div>
)

const Stock: FC<StockProps> = ({ stock, readStock, removeStock }) => (
  <div className="stockContent">
    <a href={ stock.link } target="_blank" onClick={ () => readStock(stock.id) }>
      <div className="stock">
        <div className="leftContent">
          { stock.image ? <img src={ stock.image } /> : <span className="noImage">No Image </span> }
        </div>
        <div className="rightContent">
          <div className="title">
            { stock.title }
          </div>
          <div className="publishAt">
            <Moment date={ stock.publishAt } format="YYYY/M/D" />
            <span className="dateLabel">更新</span>
          </div>
          { stock.isRead ? <ReadLabel /> : <NotReadLabel /> }
        </div>
      </div>
    </a>
    <div className="removeButtonContent">
      <span className="removeButton" onClick={ () => removeStock(stock.id) }>
        削除する
      </span>
    </div>
  </div>
)

export default Stock