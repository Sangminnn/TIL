function sumDigNthTerm(initval, patternl, nthterm) {
    let count = 0;
    let ans = initval;
    
    while(count < nthterm - 1){
      ans = ans + patternl[count%patternl.length]
      count++;
    }
    return ans.toString().split('').reduce((a,b) => (+a)+(+b));
  }

// initval이라는 초기값과 patternl이라는 숫자로 이루어진 배열, nthterm이라는 숫자 값이 들어오는데
// nthterm번째까지 patternl의 값을 반복해서 하나씩 initval에 더한 값의 모든 자리합을 구하는 문제이다.

// ex) initval이 10, nthterm이 6, patternl이 [2,1,3]이라면
// term1 = 10, term2 = 12 이런식으로 해서, 10->12->13->16->18->19
// 위의 과정에 따라 term6의 19이고 이 값의 자리합을 구하면 10이기 때문에 정답은 10이다.