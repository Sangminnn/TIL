// turn vowels into numbers
function encode(string){
    return string.replace(/[a]/g, 1)
      .replace(/[e]/g, 2)
      .replace(/[i]/g, 3)
      .replace(/[o]/g, 4)
      .replace(/[u]/g, 5)
  }
  
  //turn numbers back into vowels
  function decode(string){
    return string.replace(/[1]/g, "a")
      .replace(/[2]/g, "e")
      .replace(/[3]/g, "i")
      .replace(/[4]/g, "o")
      .replace(/[5]/g, "u")
  }

  
// a는 1, e는 2, i는 3, o는 4, u는 5 로 바꾸는게 encode
// 그 반대로 다시 바꾸는걸 decode로 짜는 문제

// turn vowels into numbers
function encode(string){
    return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
  }
  
  //turn numbers back into vowels
  function decode(string){
    return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
  }

// clever 답안
// aeiou의 indexOf로 숫자화 시키고, 그 반대는 charAt으로 바꾸는 방식
