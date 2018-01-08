function reverseWords(str) {
    return str.replace(/\w+[^A-Za-z0-9 ]{0,}/g, (match) => {return match.split('').reverse().join('') })
}

// 들어오는 string의 여백은 그대로 두고 단어들만 그 자리 내에서 reverse하는 문제
// ex) "This  is  me!" -> "sihT  si  !em"
// 처음부터 split을 사용하여 푸는 방법도 있지만, 정규식을 이용해서 풀어보기 위해 정규식 사용
// 특수문자가 0개 이상 따라오는 복수의 단어들을 match시켜 그 값들의 단어 배열을 바꿈