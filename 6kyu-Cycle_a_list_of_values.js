function cycle(dir, arr, cur) {
  if(arr.indexOf(cur) === -1) {
    return null
  } else {
    let k = arr.indexOf(cur)
    if(dir === 1) { 
      return arr[(k+1) % arr.length] 
    } else {
      return k === 0 ? arr[arr.length-1] : arr[k-1]
    }
  }
}

// arr에 들어오는 배열에서 cur에 해당하는 값의 index를 찾고
// dir 이 1 일경우는 그 index+1에 해당하는 값을, -1 일경우는 index-1에 해당하는 값을 리턴
// 단 사이클이 도는것처럼 index를 초과하거나 그 값보다 낮을경우는 주어진 배열에서 도는걸로 생각한다.
// 다중 반복문을 사용하여 문제를 해결했다.

function cycle(dir, arr, cur) {
  var indexOfCur = arr.indexOf(cur);
  return indexOfCur < 0 ?
    null :
    arr[(indexOfCur + dir + arr.length) % arr.length];
}

// clever 답안
// 우려했던 cur의 인덱스값이 0인 케이스를 arr.length 를 더해줌으로써 해결