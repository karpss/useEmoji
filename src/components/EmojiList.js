/* eslint-disable */
import React, {useState, useEffect} from 'react';
import { fetchEmoji } from '../api';






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


    //console.log(emoji);
  
  const handleClick = () => {
    //console.log('Working');
    //setInput(prevInput => prevInput + emojiObject);
    const selectedValue = emoji.filter((emojis) => emojis)
      setInput(prevInput => prevInput + selectedValue);
      //console.log(event.target.dataset.user)
    
  }

  

  return (
    
    
  <div>
    
    
   <form>
   
   
      <p>
        <label htmlFor="comment">Comment:</label>
        <textarea
          name="comments"
          value={input}
          onChange={event => setInput(event.target.value)}
          type="text"  
        ></textarea>
      </p>      
      
    </form>
    
      {!hideEmoji ?<div className='emojilist'>
       <p  onClick={handleClick} >{ emoji.map(number => <>{number}</>) }</p>
    </div> : null }
    <button onClick={() => setHideEmoji(s => !s)}>Add Emoji</button>
    
    </div>
    
  
  )
};

export default EmojiList;
