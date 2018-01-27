function collatz(n){
    let ans = [n];
    
    while(n > 1){
      if(n % 2 == 0) { n = n/2; ans.push(n); } else { n = (3*n)+1; ans.push(n) }
    }
    
    return ans.join('->')
  }


// 내 답안



function collatz(n){
    if(n===1) return "1";
    return n + "->" + collatz(n%2===0?n/2:3*n+1)
  }

// clever 답안
// 재귀문을 사용