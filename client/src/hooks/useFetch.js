import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Request failed ${res.status}`);
        }

        const resData = await res.json();
        setData(resData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
