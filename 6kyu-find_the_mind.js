function mineLocation(field){
    let count = 0;
    
    while(count < field.length){
      if(field[count].every((e) => {return e == 0}) == false) {
        return [count, field[count].join('').indexOf(1)]
      } else {
        count++
      }
    }
  }

  // 2차원 배열이 들어오는데 그 배열들 중 한개의 배열에만 1이 들어있다.
  // 그 1의 인덱스를 구하는 문제
  // while반복문을 이용하여 모든 원소가 0이라면 그냥 카운트를 1 올리고
  // 아니라면 그곳에서 1의 인덱스를 구하는 방식으로 풀었음
  