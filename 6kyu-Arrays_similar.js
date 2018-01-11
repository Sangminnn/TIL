function arraysSimilar(arr1, arr2) {
    let a = arr1.sort((a,b) => a-b);
    let b = arr2.sort((a,b) => a-b);
    
    while(a.length > 0 || b.length > 0){
      if(a.shift() !== b.shift()) return false;
    }
    return true
  }
  


// arr1과 arr2에 들어오는 배열의 구성이 같은지 찾는 문제.