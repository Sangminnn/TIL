function groupCheck(s){
    while(s.match(/[(][)]/g) != null || s.match(/[\[][\]]/g) != null || s.match(/[{][}]/g) != null){
     s = s.replace(/[(][)]/g, mat1 => {return ""});
     s = s.replace(/[\[][\]]/g, mat2 => {return ""});
     s = s.replace(/[{][}]/g, mat3 => {return ""});
   }
    return !s.length
  }


// 인풋값에 (), {}, []가 제대로 쌍을 이루는지 판별해내는 문제
// ex1) "([{}]()" - false
// ex2) "([{[()]}])()" - true

// 각각 괄호케이스를 따로 지정해서 풀었지만 조만간 한번에 지정하는 방식으로 다시 풀어봐야겠음.