import React, { useEffect, useState } from "react";
import styles from "./Index.module.css";

let colors = ["maroon", "red", "gold", "lightgreen", "darkgreen"]

const StrengthMeter = ({password}) => {
    const [strength, setStrength] = useState(0)
   
    // code to check password strength
    useEffect(() => {
        if(password) {
            console.log(password)
            let strength = 0;            
            if(/[a-z]/.test(password)){
                strength++;
            } 
             if(/[A-Z]/.test(password)){
                strength++;
            }
             if(/[0-9]/.test(password)){
                strength++;
            }
             if(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)){
                strength++;
            } 
             if(password.length > 9) {
                strength++;
            }
        
            setStrength(strength)
        } else {
            setStrength(0)
        }
     
    }, [password])

    // creating password strength box with different colors
    return (
        <div className={styles.main}>
            <p>password strength</p>
            {Array.from({ length: 5 }).map((e, i) => (
                <div
                    style={i < strength ? { background: colors[strength-1] } : null}
                    key={i}
                ></div>
            ))}
        </div>
    );
};

export default StrengthMeter;
