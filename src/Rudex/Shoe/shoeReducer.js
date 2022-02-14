import {FETCH_SHOES_FAILURE,FETCH_SHOES_REQUEST, FETCH_SHOES_SUCCESS} from './shoeType'

const initialState = {
    loading: false,
    shoes: [],
    error: ''
}

const ShoeReducer = (state= initialState, action) =>{
    switch (action.type) {
        case FETCH_SHOES_REQUEST: return{
            ...state,
            loading: true
        }
        case FETCH_SHOES_SUCCESS: return{
            loading: false,
            shoes: action.payload,
            error: ''
        }
        case FETCH_SHOES_FAILURE : return{
            loading: false,
            shoes: [],
            error : action.payload
        }
            
        default:
            return state;
    }

}

export default ShoeReducer; 