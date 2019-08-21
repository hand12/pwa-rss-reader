import { Epic, ofType } from 'redux-observable'
import { from } from 'rxjs'
import { map, ignoreElements, switchMap } from 'rxjs/operators'
import { getFeeds } from './api'
import { FeedsActions } from './actions'
import { Feed } from './types'

export const GetFeedsEpic = (actions$: any) => (
  actions$.pipe(
    ofType(FeedsActions.getFeeds),
    switchMap((action: any) => {
      return from(getFeeds('genre'))
        .pipe(
          map((feeds: Feed[]) => {
            // console.log(feeds)
            FeedsActions.setFeeds(feeds)
          })
        )
    }),
    ignoreElements()
  )
)

export default [
  GetFeedsEpic
]