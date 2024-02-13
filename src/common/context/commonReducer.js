import { types } from "../types/types";

export const commonReducer = (state = {}, action) => {
    switch(action.type) {

        case types.setRoute:
            return {
                ...state,
                destinyRoute: action.payload
            };

        default:
            return state;
    }
}