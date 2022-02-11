/* eslint-disable */
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://emoji-api.com/emojis?access_key=${API_KEY}`;


export const fetchEmoji = async () => {
      
      //const {data} = await axios.get(url);
    
      //console.log(data);
    try {
      const {data} = await axios.get(url);
  
      return data.map((icon) => icon.character);
    } catch (error) {
      console.log(error);
    }

    
    
}
