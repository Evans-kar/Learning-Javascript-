function firstDivBy3And5(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 3 === 0 && arr[i] % 5 ===0){
            return arr[i];
        }
    }
    return undefined;
}
console.log(firstDivBy3And5([3, 10, 12, 15, 30]));
