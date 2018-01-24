function kebabize(str) {
  return str.replace(/[0-9]+/g, "")
            .replace(/[A-Z]/g, (match, i) => 
            (i == 0) ? match.toLowerCase() : '-'+ match.toLowerCase())
}

// input 값으로 들어오는 값중 문자열이 아닌값은 모두 제거
// 그리고 맨 처음 값으로 들어오는 대문자는 소문자화만 해주고
// 나머지 대문자는 소문자화 후에 앞에 '-'를 넣어주면 해결.