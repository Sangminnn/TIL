function solution(n){
    if(n.length == 1) return n
    
    const ans = n - Math.floor(n)
    return ans < 0.25 ? Math.floor(n) : ans < 0.75 ? Math.floor(n)+0.5 : Math.ceil(n)
  }

// 반올림의 기준이 0.5단위로 끊어지도록 하는 문제
// 소수점자리만 상수로 지정해서 3중 조건문으로 해결


function solution(n){
    return Math.round(n*2)/2;
}
// clever 답안
// 천재 ...?