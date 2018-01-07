function sumConsecutives(s) {
    let last = s[0]; 
    let sum = s[0];
    let ans = [];
    
    for(var i = 1; i <= s.length; i++){
      if(last == s[i]){
        sum += s[i]
      } else {
        ans.push(sum);
        sum = s[i];
        last = s[i]
      }
    }
    return ans;
  }

  // 들어오는 배열에 숫자들이 인자로 들어있는데, 연속적으로 같은 수가 나오면 그 수들을 합치는 문제
  // for문을 지양하는 편이라 다른 방법을 오래 고민해봤는데 결국 for문을 사용 ..
  