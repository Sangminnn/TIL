function abbreviate(string) {
    let length;
    
    return string.replace(/\w+/g, function(match){
      length = match.substr(1,match.length-2).length
      return (length > 1) ?  match[0] + length + match[match.length-1] : match
    })
}

// 인풋값으로 들어오는 string에서 연속적인 알파벳들만 그 좌우 맨끝 단어를 제외한 문자열을 길이값으로 바꿔주는 문제
// 만약 길이값이 1이라면 길이값으로 바꾸지 않고 그대로 리턴
// 괌 여행 후 첫 알고리즘 풀이라서 풀고나서도 '왜 이렇게 풀었지..?' 하는 부분이 있다.
// 1. length를 그냥 match.lengh -2 로만 해도 같은 값이 나오는데 왜 저렇게 ..?
// 2. \w+이후에 조건문으로 가려내는 것이 아니라. 애초에 문자열 길이가 4이상인 것만 고르면 더 간단한것을 ....
