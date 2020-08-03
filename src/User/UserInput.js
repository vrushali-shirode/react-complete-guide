import React from 'react';

const userInput = (props) => {
    return (
        <input type="text" onChange={props.change} value={props.name}/>
    )
}

export default userInput;