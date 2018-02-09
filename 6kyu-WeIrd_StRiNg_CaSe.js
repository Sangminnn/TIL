function toWeirdCase(string){
    return string.split(' ').map((n) => {
      return n.split('').map((str, i) => {
        return (i % 2 == 0) ? str = str.toUpperCase() : str
      }).join('')
    }).join(' ')
  }

  // string이 들어오면 그 string의 인덱스가 짝수인것만 모두 대문자화 하는 문제
  // 단 띄어쓰기가 들어오면 string의 인덱스 카운팅은 리셋

  // map의 특성에 따라 array에만 적용이 되기때문에
  // 먼저 띄어쓰기별로 string을 나누고, 그 나눈 string도 한글자씩 나누어
  // map함수의 2번째 인자인 index를 이용, index가 짝수일 경우에만 대문자를 리턴
  // 이후 나눈 string을 join함수로 문자화, 그리고 그 문자화된 string들을 마지막으로 합치는 풀이