import React from "react";
import ActionType from "./action_type";


export const setMenuAction = (dispatch , param ) => {
    const actiontype = ActionType.ACTION_MENU
     let payload = param.actionMenu
    dispatch({type : actiontype , payload })
}