import { combineReducers } from 'redux'

import bills from './bills'

export default combineReducers({
  bills,
})

export * from './bills'
