import { types } from "../types/types";

export const genresReducer = (state = {}, action) => {
    switch(action.type) {

        case types.AddType:
            return {
                ...state,
                type: action.payload,
            };

        case types.AddGenre:
            return {
                ...state,
                    genre: action.payload,
            };

        case types.AddFilter:
        
            let newArray = [];
            if(action.payload !== 0) {
                const index  = state.filter.findIndex(el => el === action.payload);
                if(index === -1) {
                    newArray = [...state.filter, action.payload]
                } else {
                    newArray = state.filter.filter(el => el !== action.payload);
                }
            }

            return {
                ...state,
                filter: newArray
            };


        default:
            return state;
    }
}