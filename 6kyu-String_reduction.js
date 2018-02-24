function solve(a, b) {
  let tar = b.split('')
  while(tar.length){
    if(a.match(tar[0])) { 
      a = a.replace(tar.shift(),'')
    } else {
      return 0
    }
  }
  return a.length
}

// a와 b에 두개의 string이 들어오면 b에 있는 모든 글자들을 a에서 제외하고 남은 a의 길이를 구하는 문제
// 만약 b에 있는 글자 중 a에 없는 글자가 있다면 0을 리턴

// shift를 사용하여 b의 length를 하나씩 줄여가기 위해 새로운 변수에 b.split('')을 배치
// 이후 tar이 남아있다면 계속해서 a에서 줄여가는 반복문과, tar에 있는 단어가 없을 경우 0을 리턴하는
// 조건문을 동시에 적용하여 문제를 해결했다.