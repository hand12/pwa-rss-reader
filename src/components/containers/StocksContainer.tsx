import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { InitialStateType as StocksInitialState } from '../../ducks/stocks/reducers'
import { StocksActions } from '../../ducks/stocks/actions'
import { Stock } from '../../ducks/stocks/types'
import StocksPageContents from '../organisms/StocksPageContents'

interface InitialStateType {
  stocks: StocksInitialState
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addStock: (stock: Stock) => dispatch(StocksActions.addStock(stock))
  }
}

function mapStateToProps(state: InitialStateType) {
  return {
    stocks: state.stocks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StocksPageContents)
