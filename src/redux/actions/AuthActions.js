import {STORE_USER_DETAIL} from './ActionConstants'

export const userStoreDetails=(userData) =>{
    console.log("inside action")
    return {
        type:STORE_USER_DETAIL,
        payload:userData

    }
}