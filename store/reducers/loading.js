import {
    LOADING
} from "../actions/type";


const initialState = {
    loading: false
};

const LoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
               loading: action.loading
            };
        default:
            return state;
    }
};
export default  LoadingReducer ;