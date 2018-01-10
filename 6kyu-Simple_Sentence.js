function makeSentence(parts) {
    let ans = parts.join(' ').replace(/[ ][,]/g, ',').replace(/[^A-Za-z0-9]+/g, (match) => {
      return (match.length > 2) ? match = "." : match
    })
    ans = ans.replace(/[ ][.]/, '.');
    return ans[ans.length-1] == "." ? ans : ans+"."
  }
  
  // Simple Sentence
  // parts에 들어오는 문자 및 콤마로 이루어진 배열들을 조건에 맞게 바꾸어 문자열로 리턴한다.
  // 조건 1 : 콤마는 무조건 문자들 사이에 오고, 콤마 왼쪽의 문자와의 공백은 없어야한다.
  // 조건 2 : 위의 조건을 제외한 나머지 문자열들은 사이에 공백을 가지고 있어야 한다.
  // 조건 3 : 마지막에 마침표가 없을경우 마침표를 찍어주어야 함
  // 조건 4 : 마침표가 여러개 나올경우에도 무조건 마침표는 하나
  // 조건 4 예시 : "this is me . . ." (X)
  //             "this is me." (O)

  // 아직 정규식에 대한 지식이 많이 부족함을 느끼는 문제였음.