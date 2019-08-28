export const initialState = {
  loading: false
}

export type InitialStateType = {
  loading: boolean
}

interface ActionType {
  type: string,
  payload: any
}

export const feedsReducer = (state: InitialStateType = initialState, action: ActionType) => {
  switch(action.type) {
    case 'GET_FEEDS_STARTED':
      return Object.assign({}, state, { loading: true })
    case 'GET_FEEDS_DONE':
      return Object.assign({}, state, { loading: false })
    default:
      return state
  }
}