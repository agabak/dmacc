// possible to get sum of  target from array of numbers

const canSum = (targetSum, numbers) => {

    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers) {
        const remainder = targetSum - num;
       if(canSum(remainder, numbers) === true) return true;
    }

 return false;
};

console.log(canSum(7,[2,3]));
console.log(canSum(7,[5,3,4,7]));


// O(m*n)  time
// o(m)  space


const canSumMemo = (targetSum, numbers, memo = {})  => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    for(let num of numbers) {
        const remainder = targetSum - num;
        if(canSumMemo(remainder, numbers, memo) === true){
           memo[targetSum] = true;
           return memo[targetSum];
        } 
    }
    memo[targetSum] = false;
    return memo[targetSum];
}


console.log(canSumMemo(300,[7,14]));


const howSum = (targetHow, numbers) => {
    if(targetHow === 0) return [];
    if(targetHow < 0 ) return null;

    for(let num of numbers) {
        const remainder = targetHow - num;
        const ramainderResult = howSum(remainder, numbers);
        if(ramainderResult !== null) {
            return [...ramainderResult, num];
        }
    }

    return null;
}
2

const howSumMemo = (targetHow, numbers, memo = {}) => {
    if(targetHow in memo) return memo[targetHow];
    if(targetHow === 0) return [];
    if(targetHow < 0 ) return null;

    for(let num of numbers) {
        const remainder = targetHow - num;
        const ramainderResult = howSumMemo(remainder, numbers, memo);
        if(ramainderResult !== null) {
            memo[targetHow] = [...ramainderResult, num];
            return memo[targetHow];
        }
    }
    memo[targetHow] = null;
    return  null;
}


console.log(howSum(7,[2,3]));
console.log(howSum(7,[5,3,4,7]));
console.log(howSum(300,[7,14]));

console.log(howSumMemo(7,[2,3]));
console.log(howSumMemo(7,[5,3,4,7]));
console.log(howSumMemo(300,[7,14]));

console.log(howSumMemo(8,[2,3,5]));