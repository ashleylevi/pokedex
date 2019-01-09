export const getTypes = (types) => ({
  type: 'GET_TYPES',
  types
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})