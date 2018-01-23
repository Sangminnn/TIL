function isAlt(word) {
    return (!word.match(/[aeiou][aeiou]/) && !word.match(/[^aeiou][^aeiou]/)) ? true : false
  }
// 문제 이름 : Are we alternate?
// 들어오는 word가 자음 모음이 번갈아 나오는지를 보는 문제
// 정규식을 생각한 발상은 좋았다.
// 근데 생각해보니까 [aeiou]{2} 와 [^aeiou]{2}의 조합으로도 가능했는데 ..