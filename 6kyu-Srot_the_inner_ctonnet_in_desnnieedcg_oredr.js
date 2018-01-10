function sortTheInnerContent(words){
    let tar;
    let st;
    let nd;
    
    return words.split(' ').map((val) => {
      if(val.length > 3) {
        val = val.split('')
        st = val.shift();
        nd = val.pop();
        
        tar = val.sort((a,b) => {
          return b.charCodeAt() - a.charCodeAt()
        }).join('')
        return st + tar + nd
      } else {
        return val
      }
    }).join(' ')
  }
  
  // 문자열이 들어오면 4글자 이상인 단어들만 그 맨끝의 두 문자를 제외하고
  // 순서를 바꾸는문제

  // 알파벳 상의 순서를 어떻게 나열할까 생각하던 중 charCodeAt을 사용하였다.