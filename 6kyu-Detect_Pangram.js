function isPangram(string){
  let i = 65;
  while(i <= 90){
    if(!string.toUpperCase().match(String.fromCharCode(i))) return false;
    i++;
  }
  return true
}

// 주어진 문장에 알파벳 전부가 대소문자 관계없이 최소 한번씩은 나왔는지 알아보는 문제
// 모두 대문자화한 다음 String의 메서드인 fromCharCode를 사용하여 대문자 알파벳 전부를 반복문으로 잡아냈음.


function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}

// clever 답안
// 한번에 모든 알파벳을 나열한 다음, every로 모두 한번씩 있는지 검사하는 방법