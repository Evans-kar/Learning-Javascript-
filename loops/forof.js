const nums = [4, 9, 2, 7, 10, 3];
 let results = 0;
for (const number of nums){
    if (number %2 === 0){
       results += number;
    }
}
console.log(results);