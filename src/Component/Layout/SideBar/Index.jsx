import React, { useEffect, useState } from "react";
import { MdCode, MdMenu } from "react-icons/md";
import styles from "./Index.module.css";


const SideBar = ({ data, width, handleWidth }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.outerWidth > 768 && setOpen(true)
    }, [window.outerWidth])

    // handling width of sidebar when uer click on expand button
    let mainStyle =
        width === "15"
            ? { width: `${width}%` }
            : { width: `${width}%`, alignItems: "center" };

     // handling links on sidebar when juser click on expand button       
    const linkStyle =
        width === "15"
            ? { margin: "7% 0", borderRadius: "0" }
            : { margin: "20%" };

    // changing with og sidebar when on click of expand button        
    const handleSide = () => {
        setOpen(() => !open);
    };

    return (
        <>
            <div onClick={handleSide} className={styles.side}>
                <MdMenu />
            </div>
            <div
                style={{ transform: `translateX(${open ? "0" : "-100%"})` }}
                className={styles.container}
            >
                <div style={mainStyle} className={styles.main}>
                    {data.map((e, i) => (
                        <div key={i} style={linkStyle}>
                            {e.icon}
                            <p>{e.name}</p>
                        </div>
                    ))}
                    <div
                        className = {styles.expand_btn}
                        style={(linkStyle, { marginTop: "80px" })}
                        onClick={handleWidth}
                    >
                        <MdCode />
                        {width === "15" && <p>Hide</p>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;
