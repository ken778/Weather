import {useEffect, useState,} from 'react';
import { Alert} from 'react-native';
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  //show alert when there is no connection
  const createTwoButtonAlert = () =>
  Alert.alert('Connection Problem', 'Please check your internet connection', [
 
    {text: 'OK'},
  ]);


  useEffect(() => {
    createTwoButtonAlert()
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
       
        setIsPending(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        console.log('Error fetching data:', error);
        createTwoButtonAlert()
        setIsPending(false);
        setError(error);
      });
  }, [url]);

  return {data, isPending, error};
};
export default useFetch;
