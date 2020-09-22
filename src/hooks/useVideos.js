import { useState, useEffect } from 'react';
import API from '../apis/youtube';

const useVideos = (defaultTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  const search = async (term) => {
    const response = await API.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search]; // react convention
    // return { videos, search }; JS convention
}

export default useVideos;