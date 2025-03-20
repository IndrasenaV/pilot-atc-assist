import React from 'react';
import { Typography } from '@mui/material';

const phoneticAlphabet = {
  'A': 'Alpha',
  'B': 'Bravo',
  'C': 'Charlie',
  'D': 'Delta',
  'E': 'Echo',
  'F': 'Foxtrot',
  'G': 'Golf',
  'H': 'Hotel',
  'I': 'India',
  'J': 'Juliet',
  'K': 'Kilo',
  'L': 'Lima',
  'M': 'Mike',
  'N': 'November',
  'O': 'Oscar',
  'P': 'Papa',
  'Q': 'Quebec',
  'R': 'Romeo',
  'S': 'Sierra',
  'T': 'Tango',
  'U': 'Uniform',
  'V': 'Victor',
  'W': 'Whiskey',
  'X': 'X-ray',
  'Y': 'Yankee',
  'Z': 'Zulu',
  '0': 'Zero',
  '1': 'One',
  '2': 'Two',
  '3': 'Three',
  '4': 'Four',
  '5': 'Five',
  '6': 'Six',
  '7': 'Seven',
  '8': 'Eight',
  '9': 'Niner'
};

const PhoneticText = ({ text, component = Typography, ...props }) => {
  const Component = component;
  
  const convertToPhonetic = (text) => {
    if (!text) return '';
    
    return text.toUpperCase().split('').map((char, index) => {
      const phonetic = phoneticAlphabet[char];
      if (phonetic) {
        return index === 0 ? phonetic : ` ${phonetic}`;
      }
      return char;
    }).join('');
  };

  return (
    <Component {...props}>
      {convertToPhonetic(text)}
    </Component>
  );
};

export default PhoneticText; 