import {STORE_USER_DETAIL} from './ActionConstants'

export const userStoreDetails=(userData) =>{
    return {
        type:STORE_USER_DETAIL,
        payload:userData

    }
}