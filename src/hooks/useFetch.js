import {useEffect, useState} from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error('Could not fetch weather info');
        }
        return response.json();
      })
      .then(data => {
        // console.log(data);
        setData(data)
        setError(null);
        setIsPending(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsPending(false);
      });
  }, [url]);

  return {data, isPending, error};
};
export default useFetch;
