import { Epic, ofType } from 'redux-observable'
import { from } from 'rxjs'
import { map, ignoreElements, switchMap } from 'rxjs/operators'
import { getFeeds } from './api'
import { FeedsActions } from './actions'
import { CardsActions } from '../cards/actions'
import { Feed } from './types'

export const GetFeedsEpic = (actions$: any) => (
  actions$.pipe(
    ofType(FeedsActions.getFeeds),
    switchMap((action: any) => {
      return from(getFeeds(action.payload))
        .pipe(
          map((feeds: Feed[]) => {
            const cards = feeds.slice(0, 10).map(feed => Object.assign(
              {}, feed, { swiped: false }, { publishAt: new Date(feed.pubDate._seconds * 1000) })
            )
            return CardsActions.setCards(cards)
          })
        )
    }),
    // ignoreElements()
  )
)

export default [
  GetFeedsEpic
]