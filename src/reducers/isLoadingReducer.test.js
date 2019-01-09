import  { isLoadingReducer } from '../reducers/isLoadingReducer'

describe('isLoading reducer', () => {
  it('should return initial state', () => {
    const expected = false
    const result = isLoadingReducer(undefined,{})
    expect(result).toEqual(expected)
  })


  it('should return loading is true', () => {
    const action = {
      type: 'IS_LOADING',
      isLoading: true
    }

    const expected = true;
    const result = isLoadingReducer(undefined, action)
    expect(result).toEqual(expected)
  })
})