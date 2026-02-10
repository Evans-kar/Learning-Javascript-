let year = 1050;
function isSpecialCentury(year){
        if (year % 100 === 0 && year % 400 ===0 ){
                return year + " is a special century year"
        } else {
            return year + " is not a special century year"
        }
}
let result = isSpecialCentury(year);
console.log(result);