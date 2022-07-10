import React from 'react'

export default function ETHistory(props) {
    return (
        <li 
        style={{
            display:"flex",
            justifyContent:"space-evenly",
            border: "1px solid black",
            borderWidth: "thick",
        marginBottom:"5px"}}><span>{props.text}</span><span>{props.amount}</span></li>
    )
}
