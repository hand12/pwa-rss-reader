import { Epic, ofType } from 'redux-observable'
import { map, ignoreElements, switchMap } from 'rxjs/operators'
import { FeedsActions } from './actions'

export const GetFeedsEpic = (actions$: any) => (
  actions$.pipe(
    ofType(FeedsActions.getFeeds),
    ignoreElements()
  )
)

export default [
  GetFeedsEpic
]