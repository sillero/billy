import { actionCreator } from 'src/util'

const ACTION_TYPE = '<%= dashesEntityName %>/ACTION_TYPE'

const initialState = []

export default function reducer (state = initialState, { type, payload }) {
  switch(type) {
    default:
      return state
  }
}

export const actionType = actionCreator(ACTION_TYPE)