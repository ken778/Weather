import {useEffect, useState,} from 'react';
import { Alert} from 'react-native';
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const createTwoButtonAlert = () =>
  Alert.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
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
       
        setIsPending(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        createTwoButtonAlert()
        setIsPending(false);
        setError(error);
      });
  }, [url]);

  return {data, isPending, error};
};
export default useFetch;
