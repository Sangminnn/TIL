function countRepeats(str) {
  let count = 0;
  let word = str.match(/(.)\1+/g)
  
  word ? word.forEach((c) => {return count+=(c.length-1)}) : count
  return count
}

// str에 들어오는 인풋값중 연속되는 모든 값들을 연속되지 않도록 하나의 값으로 줄였을 때
// 줄어든 값들의 누적 합을 구하는 문제
// 연속되는 모든 값을 찾는 것이기때문에 (.)\1+ 을 사용하였고
// 매치되는 word값이 있을경우는 각각 길이 차이를 count에 누적시키는 함수를,
// word값이 없을경우는 기존의 count값인 0 그대로를 리턴할 수 있도록 만들었다.