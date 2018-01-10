function dashatize(num) {
    if(isNaN(num)) return 'NaN';
    
    return num.toString().replace(/[^0-9]/,'').split('').reduce((a,b) => {
      return a[a.length-1] % 2 == 1 || b % 2 == 1 ? a+"-"+b : a+b
    });
  };
  
  // num에 들어오는 수들중에서 홀수가 있으면 양쪽으로 대쉬를 넣어주고
  // 짝수라면 계속해서 수를 연결하는 문제
  // ex) 6811 => '68-1-1'