import { combineReducers } from 'redux';
import { getTypesReducer } from './getTypesReducer';
import { isLoadingReducer } from './isLoadingReducer';

const rootReducer = combineReducers({
  types: getTypesReducer,
  isLoading: isLoadingReducer
})

export default rootReducer;