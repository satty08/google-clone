import {useState, useEffect} from 'react';
import API_KEY from './keys';
import { useStateValue } from './StateProvider';

const CONTEXT_KEY = '7618c0bf237f8f791';

const useGoogleSearch = (term) => {
    const [data, setDate] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setDate(result);
            })
        }

        fetchData();
    }, [term])

    return { data };
}

export default useGoogleSearch
