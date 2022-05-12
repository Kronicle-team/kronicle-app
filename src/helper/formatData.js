/***************************************************************************************
 *    Title: How to Capitalize the First Letter of Each Word in JavaScript – a JS Uppercase Tutorial
 *    Author: Catalin Pit
 *    Date: 26 August 2020
 *    Availability: https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/#:~:text=In%20JavaScript%2C%20we%20have%20a,thing%20but%20as%20an%20uppercase (Accessed 1 May 2022)
 ***************************************************************************************/

const capitalizeAllWords = (str) => {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}

/***************************************************************************************
 *    Title: Capitalize words in string [duplicate]
 *    Author: disfated
 *    Date: 29 September 2011
 *    Availability: https://stackoverflow.com/questions/2332811/capitalize-words-in-string/7592235#7592235 (Accessed 1 May 2022)
 ***************************************************************************************/
// Capitalize first word of each sentence and add period at the end if missing
const formatDescription = (str) => {
  if (str[str.length - 1] !== "." && str[str.length - 1] !== "?" && str[str.length - 1] !== "!") {
    // regex to find words after period, exclamation or question mark
    return str.replace(/(^|[.!?]\s+)([a-z])/g, (c) => c.toUpperCase()) + ".";
  } else {
    return str.replace(/(^|[.!?]\s+)([a-z])/g, (c) => c.toUpperCase());
  }
}

/***************************************************************************************
 *    Title: How do you display JavaScript datetime in 12 hour AM/PM format?
 *    Author: vishodushaozae
 *    Date: 28 June 2019
 *    Availability: https://www.geeksforgeeks.org/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format/ (Accessed 2 May 2022)
 ***************************************************************************************/
const formatTime = (hr, min, sec) => {
  let ampm = hr >= 12 ? 'pm' : 'am';
  hr = hr % 12;
  hr = hr ? hr : 12;
  min = min.toString().padStart(2, '0');
  sec = sec.toString().padStart(2, '0');
  return hr + ':' + min + ':' + sec + ' ' + ampm;
}

export {capitalizeAllWords, formatDescription, formatTime}