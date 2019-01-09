import { getTypes, isLoading } from '../actions'


// export const getDataThunk = () => {
//   return async (dispatch) =>  {
//     try {
//       dispatch(isLoading(true))
//       const response = await fetch('http://localhost:3001/t')
//       const data = await response.json()
//       dispatch(getData(data))
//       dispatch(isLoading(false))
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }


export const getTypesThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch('http://localhost:3001/types')
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const typesData = await response.json()
      dispatch(getTypes(typesData))
    } catch (error) {
      console.log(error.message)
    }
  }
}