import React, { useContext } from 'react'
import styles from "./Index.module.css"
import { UserContext } from '../../../Context/UserContext/Index'


const Header = () => {
    const { user } = useContext(UserContext)

    return (
        <div className = {styles.main}>
            <div>
                <p>{`Hello! ${user.username}`}</p>
            </div>
        </div>
    )
}

export default Header
