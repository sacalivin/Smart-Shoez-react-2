import {combineReducers} from 'redux'
import ShoeReducer  from './Shoe/shoeReducer'
const rootReducer = combineReducers({
    shoes: ShoeReducer,
})

export default rootReducer;