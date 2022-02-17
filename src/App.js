import './App.css';
import React, {useState} from 'react';
import useEmoji from './hooks/useEmoji';

function App() {
  const {emoji} = useEmoji([]);
  const [hideEmoji, setHideEmoji] = useState(true);
  const [input, setInput] = useState('');

  const handleClick = (e) => {
    const eTarget = e.target.innerHTML;

    setInput((prevInput) => prevInput + eTarget);
  };

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      handleClick();
    }
  }

  return (
    <div className="App">
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
            <div onKeyDown={handleKeyDown} onClick={handleClick}>
              {emoji.map((icon, i) => (
                // eslint-disable-next-line react/no-array-index-key
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
    </div>
  );
}

export default App;
