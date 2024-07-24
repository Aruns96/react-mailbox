import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
 

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await fetch(url);
        
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        alert(error);
      } 
    };

    fetchData();
  }, [url]); 

  return data;
}
export default useFetch;
