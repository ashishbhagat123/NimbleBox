import React from 'react'
import styles from "./Index.module.css"

const Button = ({name, handleClick, color}) => {

    return (
        <>
            <button style = {{color: color}} onClick = {handleClick}>{name}</button>
        </>
    )
}

export default Button
