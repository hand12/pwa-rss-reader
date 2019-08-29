import { ofType } from 'redux-observable'
import { from } from 'rxjs'
import { switchMap, mergeMap } from 'rxjs/operators'
import { getFeeds } from './api'
import { FeedsActions } from './actions'
import { CardsActions } from '../cards/actions'
import { Feed } from './types'

export const GetFeedsEpic = (actions$: any) => (
  actions$.pipe(
    ofType(FeedsActions.getFeeds.started),
    switchMap((action: any) => {
      return from(getFeeds(action.payload))
        .pipe(
          mergeMap((feeds: Feed[]) => {
            const cards = feeds.slice(0, 20).map(feed => Object.assign(
              {}, feed, { swiped: false }, { publishAt: new Date(feed.pubDate._seconds * 1000) })
            )
            return [
              CardsActions.setCards(cards), FeedsActions.getFeeds.done({ params: 'hoge', result: 'fuga' })
            ]
          })
        )
    }),
  )
)

export default [
  GetFeedsEpic
]