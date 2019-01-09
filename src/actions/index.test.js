import * as actions from '../actions/index'

describe('actions', () => {
  it('should have a type of GET_TYPES', () => {
    const types = [
        {
          id: "1",
          name: "normal",
          pokemon: [
          "16",
          "17",
          "18",
          "19",
          "20"]},
        {
          id: "2",
          name: "fighting",
          pokemon: [
          "56",
          "57",
          "66",
          "67",
          "68"
          ]}
      ]
      const expectedAction = {
        type: 'GET_TYPES',
        types
      }
      const result = actions.getTypes(types);
      expect(result).toEqual(expectedAction)
  })

  it('should have a type of isLoading ', () => {
    const bool = true;
    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: true
    }
    const result = actions.isLoading(bool)
    expect(result).toEqual(expectedAction)
  })
})