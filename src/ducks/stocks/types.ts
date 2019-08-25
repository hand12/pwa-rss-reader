import { Feed } from '../feeds/types'

export interface Stock extends Feed {
  publishAt: Date
  isRead: boolean
}
