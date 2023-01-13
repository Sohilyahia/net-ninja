import { useState, useEffect } from "react"

const useFetch = (url) =>{

    const [data, setData] = useState(null);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
      setTimeout(() => {
        fetch(url)
        .then(res => {
          if (!res.ok) { // error coming back from server
            throw Error('could not fetch the data for that resource');
          } 
          return res.json();
        })
        .then(data => {
          setIsloading(false);
          setData(data);
          setError(null);
        })
        .catch(err => {
          // auto catches network / connection error
          setIsloading(false);
          setError(err.message);
        })
      }, 500); 
    }, [url])

    return { data , isLoading , error}

}

export default useFetch