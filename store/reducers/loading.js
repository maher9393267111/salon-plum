import {
    LOADING,
    ALERT
} from "../actions/type";


const initialState = {
    loading: false,
    alert:{

        message:'', type:'', duration:'', isShow:''
    }
};

const LoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
               loading: action.loading
            };


            case ALERT:
return {
            ...state,
            alert: action.alert
}


        default:
            return state;
    }
};
export default  LoadingReducer ;