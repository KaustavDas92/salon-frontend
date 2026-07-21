import { user_auth_info_state } from "../states/AuthState";
import { STORE_USER_DETAIL } from "../actions/ActionConstants";

const AuthReducer=(state=user_auth_info_state,action) =>{
    switch(action.type){
        case STORE_USER_DETAIL: return  {
            ...state,
            'user': action.payload.user,
            'access_token': action.payload.user.access_token

        };
        default: return state
    }
}

export default AuthReducer;