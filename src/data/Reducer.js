import { ADD_TWEET } from "./Actions";

function Reducer(state = [], action) {
    switch(action.type){
        case ADD_TWEET:
            return [
                ...state,
                {
                    tweet: action.payload.tweet
                }
            ];
        default:
            return state;
    }
}

export default Reducer;