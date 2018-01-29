function parse(data){
    let ans = [];
    let n= 0;
    
    data.split('').forEach((mat) => {
      switch(mat) {
        case "i" :
          n++;
          break;
        case "d" :
          n--;
          break;
        case "s" :
          n = Math.pow(n, 2);
          break;
        case "o" :
          ans.push(n);
          break;
      }
    })
    return ans;
  }

// data값에 i,d,s,o 4가지 문자로 이루어진 string이 들어오는데
// 초기값 0을 기준으로 i는 값에 1을 더하고
// d는 1을 빼주고, s는 값을 제곱, o는 그 값을 배열에 넣어주면서 완성된 배열을 리턴하는 문제
