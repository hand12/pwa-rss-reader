import { Feed } from '../feeds/types'

export interface Card extends Feed {
  publishAt: Date
  swiped: boolean
}
