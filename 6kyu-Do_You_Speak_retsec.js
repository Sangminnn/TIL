function reverseByCenter(s){
    return (s.length % 2 == 0) ? s.substr(s.length/2, s.length) + s.substr(0, (s.length/2)) : s.substr(Math.ceil(s.length/2), s.length) + s[Math.floor(s.length/2)] + s.substr(0, Math.floor(s.length/2))
  }
  
  // 문제 이름 : Do you speak retsec?
  // 들어오는 string을 짝수라면 반반을 나누어 위치를 바꾸고,
  // 홀수라면 가운데 글자를 기준으로 반반을 나누어 위치를 바꾸는 문제