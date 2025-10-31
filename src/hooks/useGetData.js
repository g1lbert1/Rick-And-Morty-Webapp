import {useEffect, useState} from "react"
import axios from 'axios'
const useGetData = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let ignore = false

    async function fetchData() {
      setLoading(true)
      setError(false)
      try{
        const {data} = await axios.get(url)
        if (!ignore) setData(data)
      }catch (e){
        if(!ignore){
          setError(true)
          setData(null)
        }
      }finally{
        if (!ignore) setLoading(false);
      }
    }

    fetchData()

    return () => {
      ignore = true
    }
  }, [url])

  return { data, loading, error }
}

