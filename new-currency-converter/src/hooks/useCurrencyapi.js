import {useEffect, useState} from "react"


async function useCurrencyapi(){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=in&category=General&apiKey=aff037a5cc9c4235a67463a2c2b617e3&page=1&&pageSize=20`)
        .then((res) => res.json())
        .then((res) => setData(res))
        // console.log(data.articles);
    },[])
    // console.log(data);
    return data
}



export default useCurrencyapi;