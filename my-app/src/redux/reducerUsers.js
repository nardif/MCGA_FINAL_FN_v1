import {
    GET_USERS_PENDING,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR
} from './actions';

const initialState = {
    isFetching: false,
    list: [],
    selectedItem: {},
    error: ''
};
  
const reducerUsers = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_PENDING: {
            return {
                ...state,
                isFetching: true,
                error: initialState.error
            };
        }
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                list: state.list.map((item) => {
                  if (item._id === action.payload._id) {
                    return action.payload;
                  }
                  return item;
                })
            };
        }
        case GET_USERS_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        }
        default: {
            return state;
        }  
    }
};

export default reducerUsers;