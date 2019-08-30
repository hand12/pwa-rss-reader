import React, { FC } from 'react'
import classNames from 'classnames'
import Icon from '@material-ui/core/Icon'
import { Stock } from '../../ducks/stocks/types'
import './AlterButtonsContents.scss'

interface AlterButtonsContentsProps {
  addStock(stock: Stock): void
}

const skipButtonClassNames = classNames('button', 'skip')
const stockButtonClassNames = classNames('button', 'stock')

const AlterButtonsContents: FC<AlterButtonsContentsProps> = ({ addStock }) => (
  <div className="alterButtonsContents">
    <div className="buttons">
      <span className={ skipButtonClassNames }>
        <Icon className="materialIcon">replay</Icon>
        <span className="label">スキップ</span>
      </span>
      <span className={ stockButtonClassNames }>
        <Icon className="materialIcon">move_to_inbox</Icon>
        <span className="label">ストック</span>
      </span>
    </div>
  </div>
)

export default AlterButtonsContents