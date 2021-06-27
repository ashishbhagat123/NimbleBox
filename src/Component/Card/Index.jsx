import React from 'react'
import styles from "./Index.module.css"

const Card = ({image, name}) => {
    return (
        <div className = {styles.main}>
            <img src={image} alt="poster"/>
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default Card
