import { types } from "../types/types";

export const commonReducer = (state = {}, action) => {
    switch(action.type) {

        case types.setRoute:
            return {
                ...state,
                destinyRoute: action.payload
            };
        case types.setSearchTerm:
            return {
                ...state,
                searchTerm: action.payload
            };

        default:
            return state;
    }
}