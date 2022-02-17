import {useState, useEffect} from 'react';
import {fetchEmoji} from '../api';

const useEmoji = () => {
  const [emoji, setEmoji] = useState([]);

  useEffect(() => {
    const getEmojiList = async () => {
      setEmoji(await fetchEmoji());
    };
    getEmojiList();
  }, []);

  return {emoji};
};

export default useEmoji;
