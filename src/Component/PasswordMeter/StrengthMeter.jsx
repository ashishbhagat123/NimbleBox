import React from 'react'
import styles from "./Meter.module.css"

const StrengthMeter = ({count = 1}) => {
    return (
        <div className = {styles.main}>
            <p>password strength</p>
            {
                Array.from({length: 5}).map((e, i) => (
                    <div style = {i < count? {background: "green"}: null} key = {i}></div>
                ))
            }
        </div>
    )
}

export default StrengthMeter
