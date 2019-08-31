import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { InitialStateType as CardsInitialState } from '../../ducks/cards/reducers'
import { InitialStateType as StocksInitialState } from '../../ducks/stocks/reducers'
import { InitialStateType as FeedsInitialState } from '../../ducks/feeds/reducers'
import { FeedsActions } from '../../ducks/feeds/actions'
import { StocksActions } from '../../ducks/stocks/actions'
import { CardsActions } from '../../ducks/cards/actions'
import { Stock } from '../../ducks/stocks/types'
import TopPageContents from '../organisms/TopPageContents'

interface InitialStateType {
  cards: CardsInitialState,
  stocks: StocksInitialState,
  feeds: FeedsInitialState
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    getFeeds: (genre: string) => dispatch(FeedsActions.getFeeds.started(genre)),
    addStock: (stock: Stock) => dispatch(StocksActions.addStock(stock)),
    swipeCard: () => dispatch(CardsActions.swipeCard())
  }
}

function mapStateToProps(state: InitialStateType) {
  return {
    cards: state.cards,
    stocks: state.stocks,
    feeds: state.feeds
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPageContents)