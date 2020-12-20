//  0(2^ n + m) time
//  0(n + m) space

gridTraveler = (m,n) => {
    if(m === 1 && n === 1) return 1;
    if(m === 0 | n === 0) return 0;
    return gridTraveler(m -1, n) + gridTraveler(m, n-1);
}

console.log(gridTraveler(2,3));
console.log(gridTraveler(4,8));


// memorize techiniques

gridTravelerMemo = (m,n, memo = {}) => {
    const key = m + ',' + n;
    //check if the arg in the  memo
    if(key in memo) return memo[key];
    if(m === 1 && n === 1) return 1;
    if(m === 0 | n === 0) return 0;
    memo[key] = gridTravelerMemo(m -1, n, memo) + gridTravelerMemo(m, n-1, memo);
    return  memo[key];
}

console.log(gridTravelerMemo(18,18));

gridTravelerMemo1 = (m,n,memo = {}) => {
   const key  = m + ',' + n;
   if(key in memo)  return memo[key];
   if(m === 1 &&  n === 1) return 1;
   if(m === 0 | n === 0) return 0;
   memo[key] = gridTravelerMemo1(m -1,n, memo) + gridTravelerMemo1(n-1,m,memo);
   return memo[key];
}

console.log(gridTravelerMemo1(19,20));

/// Memoization recipe
// 1. Make it work
  // Visualize the problem as a tree
  // Implement the tree using recursion
  // test it

// Make it efficient
  // add a  meo object
  // add a  base case to return memo values
  // store return values into the memo 

  // travel (18,8)
const travel = (m,n, memo = {}) => {
    const key = m + ',' + n;
    if(key in memo) return memo[key];
    if(m === 1 && n === 1) return 1;
    if(m === 0 | n === 0) return 0;
    memo[key] = travel(m - 1, n, memo) + travel(n - 1, m, memo);
    return memo[key];
}

  console.log(travel(4,6), 'Memory');