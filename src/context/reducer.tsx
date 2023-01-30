import React from "react";
import ActionType from "./action_type";

export const initialStateValue = {
    activeMenu : true , 
}

export const reducer = (state, action) => {
    console.log('reducer' , state , action );
    
    switch (action.type) {
        case ActionType.ACTION_MENU :
            return {        
                ...state ,
                activeMenu : action.payload
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}