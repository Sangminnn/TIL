function formatWords(words){
    if(words == [] || !words) return "";
    
    let i = 0;
    let mid = []
    let last;
    
    while(i < words.length){
      if(words[i] != "") mid.push(words[i]);
      i++;
    }
    if(mid.length > 1){
      last = mid.pop();
      return mid.join(', ') + " and " + last
    } else {
      return mid;
    }
}

// 문제 이름 : Format words into a sentence
// 문자들과 공백으로 이루어진 배열이 들어오면
// 그 값들중 공백을 제외하고 문자들을 ', '로 이어주고 마지막에만 'and'로 이어주는 문제


function formatWords(words){
    if (!words) return "";
    return words.filter(function(a) { return a !== ''}).join(', ').replace(/(, )+(\S+)$/, ' and $2');
}
// clever 풀이
// 먼저 words에 값이 없을 경우 ""를 리턴
// 그렇지 않다면 filter를 사용하여 공백을 모두 제거 후 join으로 이어주고, ', '로 이어준 문자열 중 마지막 문자열이라면 그것을 and로 바꿔준다.
// $2는 무엇 ...?
// $2 는 정규식에서 사용하는 인자 호출방식인데, 정규식을 사용하여 나누어진 인자들에 순서가 매겨지는 방식이다.
// ex) 이 문제에서 $1 은 ', ' 이고 $2 가 뒤에 따라오는 문자열이다.
// $3을 호출하게되면 할당된것이 없기때문에 $3 라고 출력된다.
