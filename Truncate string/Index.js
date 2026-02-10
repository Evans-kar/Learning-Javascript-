function truncateString(text, maxLength){
  if (text.length > maxLength){
    return text.slice(0, maxLength) + "..."
  } else {
    return text
  }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));