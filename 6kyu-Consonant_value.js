function solve(s) {
  return s.match(/[^aeiou]+/g).map((c) => {
    if(c.length == 1) {
      return c.charCodeAt() - 96
    } else {
      return c.split('').map((k) => { return k.charCodeAt() - 96 }).reduce((a,b) => a+b)
    }
  }).sort((a,b) => b-a)[0]
};

// s에 들어오는 문자중에서 모음을 기준으로 자음들의 알파벳 순서값의 최댓값을 구하는 문제
// ex) zodiacs => z,d,cs => ans : 26(z)
// 코드가 좀 길어진 느낌이 있음


const solve = s => s.split(/[aeiou]+/).reduce((s,n)=> Math.max(s, n.split('').reduce((a,b)=> a + b.charCodeAt(0)-96,0 )), 0);


// clever 답안

// 0개 이상의 모음을 기준으로 자르고, 그 값들중 알파벳 순서값 합의 최대값을 구하는데
// reduce를 사용하여 연산을 간단하게 했다.
// 내가 reduce를 사용할때는 양쪽에 모두 charCodeAt을 사용하면 오류가 나는것을 고려하여 미리 변환하고 사용한 것인데
// 애초에 이렇게 하는게 더 간단한 방법이였던것 같다.