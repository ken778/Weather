import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
const useFetch = url => {
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
        setData(data);

        setIsPending(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        console.log('Error fetching data:', error);

        setIsPending(false);
        setError(error);
      });
  }, [url]);

  return {data, isPending, error};
};
export default useFetch;
