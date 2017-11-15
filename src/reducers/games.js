import {SET_GAMES, ADD_GAMES } from "../actions";

export default function games(state = [], action = {}){
    switch(action.type){
        case ADD_GAMES:
            return [
                ...state,
                action.games
            ];
        case SET_GAMES:
            return action.games;
        default: return state;
    }
}