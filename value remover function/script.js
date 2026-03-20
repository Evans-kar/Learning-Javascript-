function destroyer (arr, ...args){
// keeps values that are not in argument
   return arr.filter(item => !args.includes(item));
}