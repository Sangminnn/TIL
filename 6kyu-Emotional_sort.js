function sortEmotions(arr, order){
  let face = [':D', ':)', ':|', ':(', 'T_T'], ans = []

  if(order === true){
    face.forEach((c) => {
      arr.forEach((t) => {
        if(t === c) { return ans.push(t) }
      })
    })
  } else {
    face.reverse()
    face.forEach((c) => {
      arr.forEach((t) => {
        if(t === c) { return ans.push(t) }
      })
    })
  }
  return ans
}

// 기준으로 주어진 얼굴모형대로 true는 웃는얼굴 -> 우는얼굴, false는 우는얼굴 -> 웃는얼굴 로 정렬하는 문제

function sortEmotions(arr, order){
  const emotions = { ':D': 1, ':)': 2, ':|': 3, ':(': 4, 'T_T': 5 }
  arr = arr.sort((a, b) => emotions[a] - emotions[b]);
  return order && arr || arr.reverse();
}

// clever답안
// emotions에 a와 b를 넣어 비교하는 방식으로, 정해놓은 숫자값으로 비교를 하여 정렬이 된다.
// 그리고 return 쪽에 order와 arr 가 모두 true일 경우는 true, 둘중 하나라도 false라면 false값이 나와서
// true일 경우는 arr이, false일 경우는 arr.reverse()가 리턴되는 논리 연산구조이다.

// 다음에 다른 비슷한 문제에서는 객체를 사용하는 방식과 논리 연산구조를 적용해 봐야겠다.