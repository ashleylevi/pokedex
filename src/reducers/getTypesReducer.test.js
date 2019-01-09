import { getTypesReducer } from '../reducers/getTypesReducer';
import * as actions from '../actions/index';

describe('getTypesReducer', () => {
  it('should return initial state', () => {
    const expected = []
    const result = getTypesReducer(undefined,{})
    expect(result).toEqual(expected)
  })

  it('should return state with all data', () => {
    const initialState = []
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
    const expected = [
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
    const result = getTypesReducer(initialState, actions.getTypes(types))
    expect(result).toEqual(expected)
  })
})