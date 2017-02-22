let counter = 0

export default (type) => (payload) => ({
  id: counter++,
  type,
  payload,
})