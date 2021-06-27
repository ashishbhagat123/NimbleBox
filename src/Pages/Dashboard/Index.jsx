import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import useSWR from "swr";
import styles from "./Index.module.css";
import Card from "../../Component/Card/Index";
import Input from "../../Component/Input/Index";
import Pagination from "../../Component/Pagination/Index";
import { fetchShows, searchShows } from "../../Api/index";

const Dashboard = ({ width }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const [query, setQuery] = useState("");

    // fetching series on initial load
    const fetchSeries = async () => {
        setLoading(true);
        setError(false);
        try {
            const data = await fetchShows();
            setLoading(false);
            return data.data;
        } catch {
            setError("Error while fetching the data");
        }
    };

    // function to search series when user type on input
    const searchSeries = async () => {
        try {
            const response = await searchShows(query);
            const data = response.data.map((e) => e.show);
            return data;
        } catch {
            setError("No Data Found");
        }
    };

    // Swr for storing cashed data
    const { data: series } = useSWR("shows", fetchSeries, {
        dedupingInterval: 60 * 1000,
    });
    const { data: searchedSeries } = useSWR(
        query ? query : undefined,
        searchSeries,
        { dedupingInterval: 60 * 1000 }
    );

    // used for changing state when getting data from api
    useEffect(() => {
        const data = query && query.length > 0 ? searchedSeries : series;
        if (data && data.length) {
            setData(data);
            setError(false);
            setLoading(false);
        } else if (data && !data.length) {
            setError("No Series Found");
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [series, searchedSeries, query]);

    // saving user search query
    const handleQuery = (e) => {
        setQuery(e.value);
    };

    // changing page when user click on page number
    const handlePage = (index) => {
        setPageNumber(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <Input
                    placeholder="Search movies"
                    handleChange={handleQuery}
                    debounceInput={true}
                    icon={<MdSearch />}
                />
            </div>
            <div
                style={{ width: `${100 - +width}%`, marginLeft: `${+width}%` }}
                className={styles.main}
            >
                {loading ? (
                    <div
                        className={styles.loader}
                        style={{ margin: "auto" }}
                    ></div>
                ) : error ? (
                    <h1 style={{ margin: "auto" }}>{error}</h1>
                ) : (
                    // displaying only eight cards per page
                    data
                        ?.slice(pageNumber * 8, 8 * (pageNumber + 1))
                        .map((e, i) => (
                            <Card
                                key={i}
                                image={e.image?.original}
                                name={e.name}
                            />
                        ))
                )}
                <Pagination
                    total={Math.ceil(data?.length / 8) || "-"}
                    onPageChange={handlePage}
                />
            </div>
        </div>
    );
};

export default Dashboard;
