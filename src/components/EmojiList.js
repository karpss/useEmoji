/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {fetchEmoji} from '../api';

const EmojiList = () => {
  const [emoji, setEmoji] = useState([]);
  const [hideEmoji, setHideEmoji] = useState(true);
  const [input, setInput] = useState('');

  useEffect(() => {
    const getEmojiList = async () => {
      setEmoji(await fetchEmoji());
    };
    getEmojiList();
  }, [setEmoji]);

  const handleClick = (e) => {
    console.log('Target', e.target.innerHTML);
    const eTarget = e.target.innerHTML;

    setInput((prevInput) => prevInput + eTarget);
  };

  

  return (
    <div>
      <form>
        <p>
          <label htmlFor="comment">Comment:</label>
          <textarea
            name="comments"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type="text"
          />
        </p>
      </form>

      {!hideEmoji ? (
        <div className="emojicontainer">
          <div onClick={handleClick}>
            {emoji.map((icon, i) => (
              <p key={i} className="emojilist">
                {icon}
              </p>
            ))}
          </div>
        </div>
      ) : null}
      <button type="button" onClick={() => setHideEmoji((s) => !s)}>
        Add Emoji
      </button>
    </div>
  );
};

export default EmojiList;
