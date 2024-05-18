function processArray(arr) {
    return arr.map(x => {
        if(x % 2 === 0) {
         return x * x;
    } else {
        return x * 3;
    }
});
}


let numbers = [7, 8, 9, 10, 11];
let newArray = processArray(numbers);
console.log(newArray);



function formatArrayStrings(stringArr, numberArr) {
    if (stringArr.length !== numberArr.length){
        throw new Error("The arrays should have the same length");
    }

    return stringArr.map((str, index) =>{
        const num = numberArr[index];
        if (num % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    })
}



let fruits = ['apple', 'grapes', 'cherries', 'berries', 'mango'];
let formattedStrings = formatArrayStrings(fruits, newArray);

console.log(formattedStrings);




export {processArray, formatArrayStrings, newArray};
