import { user_auth_info_state } from "../states/AuthState";
import { STORE_USER_DETAIL } from "../actions/ActionConstants";

const AuthReducer=(state=user_auth_info_state,action) =>{
    console.log("action inside the reducer= ",action)
    switch(action.type){
        case STORE_USER_DETAIL: 
        console.log("inside Auth Reducer store user data ")
        return  {
            ...state,
            'user': action.payload.user,
            'access_token': action.payload.accessToken,
            'refresh_token': action.payload.refreshToken,
            'userAgent':action.payload.userAgent,
            'isLoggedIn':true

        };
        default: return state
    }
}

export default AuthReducer;