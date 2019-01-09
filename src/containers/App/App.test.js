
import {mapDispatchToProps, mapStateToProps} from '../App/App'
import * as actions from '../../actions/index'
import { getTypesThunk } from '../../thunks/getTypesThunk'
jest.mock('../../thunks/getTypesThunk')

describe ('mapStateToProps', () => {
  it('should return an object with a types array and isLoading bool', () => {
    const mockData = [
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
    
     const mockState = {
       data: mockData.types,
       isLoading: false
     }
      
      const expected = {
        data: mockData.types,
        isLoading: false
      }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })
})

describe ('mapDispatchToProps', () => {
  it('mapDispatchToProps calls dispatch with a getTypesThunk', async () => {
    const mockDispatch = jest.fn()
    const thunkToDispatch = getTypesThunk()
    const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.getTypesThunk()
    expect(mockDispatch).toHaveBeenCalledWith(thunkToDispatch)
  })
})