function reverseCase(string) {
    return string.replace(/(\w)\1+/g, mat => {
      return mat === mat.toUpperCase() ? mat.toLowerCase() : mat.toUpperCase()
    })
  }

// 들어오는 input값에서 연속되는 알파벳이 있을 때, 그 알파벳이 소문자라면 대문자로,
// 대문자라면 소문자로 바꿔서 리턴해주는 문제

// 이전에 다른 문제에서 다른사람들의 정규식 풀이를 볼때 알게된 \1을 활용하여 문제에 적용해보았다.

// clever 및 best practice 의 풀이와 완전히 일치