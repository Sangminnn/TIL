function dup(s) {
  return s.map((str) => {
    return str.replace(/(\w)\1+/g, c => { return c.substr(0,1) })
  })
};

// input값으로 들어오는 배열에 들어있는 문자열들중 2개이상 같은 문자가 반복되는 부분을 한개로 고치는 문제
// 배열내의 값을 변경하는 문제이기떄문에 map을 사용, 그 대상으로 찍힌 문자열을 바꿔야해서 replace를 사용했다.


function dup(s) {
  return s.map(x => x.replace(/(.)\1+/g,'$1'))
};
// best practice 
// 두개 이상의 같은 문자를 찾아낼 때 (.)\1+ 를 사용하는 경우가 많았음
// 그리고 그 값중 한개만을 사용하고싶을 때에는 '$1'로 사용하는 경우가 많았다.

// 이렇게 풀도록 노력해봐야겠다.