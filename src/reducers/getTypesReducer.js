export const getTypesReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_TYPES':
      return action.types
    default:
      return state
  }
}