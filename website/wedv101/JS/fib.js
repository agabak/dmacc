// without memorization
// o(2 ^ n)  big O
// o(n)  big O

const fn = (n) => {
if(n <=2) return 1;
return fn(n-1) +  fn(n-2);
}

 console.log(fn(4));
 console.log(fn(6));
 console.log(fn(7));
//console.log(fn(8));
//console.log(fn(50));

// js object, keys will be arg to fn, value will be return value;
// use memorize techinics

const fib = (n, memo = {}) => {

   if(n in  memo) return memo[n];
   if(n <= 2) return 1;
    memo[n] = fib(n - 1, memo) +  fib(n - 2, memo);
    return memo[n];
}


const fibn = (n, memo = {}) => {
 if(n in memo) return memo[n];
 if(n <= 2) return 1;
 memo[n] = fibn(n - 1, memo) + fibn(n - 2, memo);
 return memo[n];
}
console.log(fibn(1000));



// How to  remember fin theory

const finM = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = finM(n-1, memo) + finM(n-2, memo);
    return memo[n];
}

console.log(finM(7), 'Memory');