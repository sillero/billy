import { actionCreator } from 'src/util'

const ADD_BILL = 'bills/ADD_BILL'

const initialState = []

export default function reducer (state = initialState, { type, payload }) {
  switch(type) {
    default:
      return state
  }
}

export const addBill = actionCreator(ADD_BILL)