import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { InitialStateType as CardsInitialState } from '../../ducks/cards/reducers'
import { InitialStateType as StocksInitialState } from '../../ducks/stocks/reducers'
import { FeedsActions } from '../../ducks/feeds/actions'
import { StocksActions } from '../../ducks/stocks/actions'
import { Stock } from '../../ducks/stocks/types'
import TopPageContents from '../organisms/TopPageContents'

interface InitialStateType {
  cards: CardsInitialState,
  stocks: StocksInitialState
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    getFeeds: (genre: string) => dispatch(FeedsActions.getFeeds(genre)),
    addStock: (stock: Stock) => dispatch(StocksActions.addStock(stock))
  }
}

function mapStateToProps(state: InitialStateType) {
  return {
    cards: state.cards,
    stocks: state.stocks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPageContents)