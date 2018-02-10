function validate(n){
    n = n.toString()
    if(n.length % 2 == 0) {
      // Even case
      n = n.split('').map((c, i) => {
        return (i % 2 == 0) ? c*2 > 9 ? c = c*2 -9 : c = c*2 : +c
      })
      return (n.reduce((a,b) => a+b) % 10 == 0) ? true : false
    } else {
      // Odd case
      n = n.split('').map((c, i) => {
        return (i % 2 == 1) ? c*2 > 9 ? c = c*2 -9 : c = c*2 : +c
      })
      return (n.reduce((a,b) => a+b) % 10 == 0) ? true : false
    }
  }
  
  // n에 들어오는 숫자의 길이가 짝수라면 짝수번째 숫자만 2배, 홀수라면 홀수번째 숫자만 2배 해준다.
  // 그 때, 그 숫자가 10이상일경우에는 9를 빼준다.
  // 그렇게 정리된 각 자리 숫자들의 합을 10으로 나누었을때 나머지가 0이라면 true, 아니라면 false를 리턴.