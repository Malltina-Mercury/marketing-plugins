import {useEffect, useState} from 'react';
import request from "../tools/request";

const useGetApi = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(undefined);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoaded(false);
      try {
        const {data: response} = await request.get(url);
        setData(response);
        setLoaded(true);
      } catch (e) {
        setError(e.message);
      }
    };

    fetchData();
  }, []);

  return {data, error, loaded};
}

export default useGetApi;
