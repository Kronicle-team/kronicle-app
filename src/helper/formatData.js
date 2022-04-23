const capitalizeAllWords = (str) => {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}

// Capitalize first word of each sentence and add period at the end if missing
const formatDescription = (str) => {
  if (str[str.length - 1] !== "." && str[str.length - 1] !== "?" && str[str.length - 1] !== "!") {
    // regex to find words after period, exclamation or question mark
    return str.replace(/(^|[.!?]\s+)([a-z])/g, (c) => c.toUpperCase()) + ".";
  } else {
    return str.replace(/(^|[.!?]\s+)([a-z])/g, (c) => c.toUpperCase());
  }
}

const formatTime = (hr, min, sec) => {
  let ampm = hr >= 12 ? 'pm' : 'am';
  hr = hr % 12;
  hr = hr ? hr : 12;
  min = min.toString().padStart(2, '0');
  sec = sec.toString().padStart(2, '0');
  return hr + ':' + min + ':' + sec + ' ' + ampm;
}

export {capitalizeAllWords, formatDescription, formatTime}