function stringTransformer(str) {  
  return str.replace(/\w/g, (c) => {return c == c.toUpperCase() ? c.toLowerCase() : c.toUpperCase() }).split(' ').reverse().join(' ')
}

// 들어오는 string에서 대문자는 소문자로, 소문자는 대문자로 바꾼 다음 띄어쓰기를 기준으로 단어의 순서를 바꿔서 리턴하는 문제