import * as actionTypes from "./actionTypes"
export const adduser = userInfos => {
return {
type: actionTypes.ADD_USER,
userInfos,
}
}

export const deleteUser=id=>{
    return {
        type:actionTypes.DELETE_USER,
        id
    }
}

export const updateUser=userInfos=>{
    return {
        type:actionTypes.UPDATE_USER,
        userInfos
    }
}