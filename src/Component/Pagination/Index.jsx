import React, { useState } from "react";
import styles from "./Index.module.css";
import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle,
} from "react-icons/io";

const Pagination = ({
    total,
    defaultPage = 1,
    pageSize = total < 5? total: 5,
    onPageChange,
}) => {
    const [startingPageNumber, setStartingPageNumber] = useState(1);
    const [selectedPage, setSelectedPage] = useState(defaultPage);

    // changing page when user clicks on the page button
    const handlePage = (page) => {
        setSelectedPage(page)
        onPageChange(page-1)
    }

    // skipping 10 pages when user clicks on arrow button
    const handlePaginationArray = (e) => {
        if(startingPageNumber + e > 0 && startingPageNumber + e < total){
            setStartingPageNumber(() => startingPageNumber + e);
            handlePage(e+selectedPage)
        }
    };

    return (
        <div className={styles.main}>
            <div>1</div>
            <div onClick={() => handlePaginationArray(-5)}>
                <IoIosArrowDropleftCircle />
            </div>
            {Array.from({ length: pageSize }).map((e, i) => (
                <div
                    onClick = {() => handlePage(i+startingPageNumber)}
                    style={
                        i + startingPageNumber === selectedPage
                            ? { background: "#FF616D" }
                            : null
                    }
                    key={i}
                >
                    {i + startingPageNumber}
                </div>
            ))}
            <div onClick={() => handlePaginationArray(5)}>
                <IoIosArrowDroprightCircle />
            </div>
            <div>{total}</div>
        </div>
    );
};

export default Pagination;
