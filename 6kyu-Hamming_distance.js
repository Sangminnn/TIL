function hamming(a,b) {
    let str1 = a.split('');
    let str2 = b.split('');
    let i = 0;
    let count = 0;
    
      for(i = 0; i < a.length; i++){
      if(str1[i] == str2[i]) count++;
    }
    return count;
  }
  
  // a와 b의 철자가 얼만큼 다른지 체크하는 문제