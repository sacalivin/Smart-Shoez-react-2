import { FETCH_SHOES_FAILURE, FETCH_SHOES_SUCCESS,FETCH_SHOES_REQUEST } from "./shoeType"
import axios  from 'axios'
export const fetchShoesRequest = () => {
    return{
        type: FETCH_SHOES_REQUEST
    }
}

const fetchShoesSuccess = (shoes) => {
    return{
        type: FETCH_SHOES_SUCCESS,
        payload: shoes
    }

}

const fetchShoesFailure = (error) => {
    return{
        type: FETCH_SHOES_FAILURE,
        payload: error


    }
}

export const fetchShoes = () =>{
    return (dispatch) => {
        dispatch(fetchShoesRequest);
        axios.get('https://localhost:44343/api/ShoeDetails/add-shoe')
        .then(response => {

            const shoes = response.data;
            alert(JSON.stringify(response.data));
            dispatch(fetchShoesSuccess(shoes));
        })
        .catch((error)  => {
            const errorMsg = error.message;
            dispatch(fetchShoesFailure(errorMsg)) ;
        })
        
    }
}

