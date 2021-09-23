import React, {useReducer} from "react";

const initialState = {
    message: 'hi'
};

function reducer(state, action) {
    switch(action.type) {
        case "YELL": 
            return {
                message: "HELLO!"
            }
        case "whisper": 
            return {
                message: "excuse me"
            }
    }
}

const TellMessage = () => {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <div>
            <p>Message is : {state.message}</p>
            <button onClick={() => dispatch({type: "YELL"})}>YELL!</button>
            <button onClick={() => dispatch({type: "whisper"})}>whisper</button>
        </div>
    )
};

export default TellMessage;