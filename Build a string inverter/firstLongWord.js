function firstLongWord(words) {
    for (let i = 0; i  < words.length; i++){
        if (words[i].length > 4){
            return words[i];
        }
    }
    return undefined;
}
console.log(firstLongWord(["hi", "book", "apple", "to"]))