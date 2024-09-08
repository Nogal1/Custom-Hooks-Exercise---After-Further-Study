import { useState } from 'react';
import axios from 'axios';

/**
 * Custom hook to handle flip state.
 */
function useFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(flip => !flip);
  };

  return [isFlipped, toggleFlip];
}

/**
 * Custom hook to handle axios requests with formatting.
 * @param {string} baseURL - The base URL for the axios request.
 * @param {function} formatFn - Function to format response data before storing.
 */
function useAxios(baseURL, formatFn, localStorageKey) {
    const [data, setData] = useLocalStorage(localStorageKey, []);
  
    const addData = async (urlSuffix = '') => {
      try {
        const response = await axios.get(`${baseURL}${urlSuffix}`);
        setData((data) => [...data, formatFn(response.data)]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    const clearData = () => {
      setData([]);
    };
  
    return [data, addData, clearData];
  }

export { useFlip, useAxios };
