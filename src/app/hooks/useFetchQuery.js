import {useState, useEffect} from "react";

const useFetchQuery =(query, params) => {
    const [data, setData] = useState(null);
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(false)

    const fetchQuery = async () => {
        try {
            setFetching(true)
            // const {data: response} = await query(param || params);
            const res = params ? await query(params) : await query
            setData(res.data);
        } catch (e) {
            setError(e)
        } finally {
            setFetching(false)
        }
    }

    useEffect(() => {
        fetchQuery();
    }, [params])

    return {data, fetching, error,fetchQuery}

}

export default useFetchQuery;