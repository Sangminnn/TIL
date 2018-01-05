function findUniq(arr) {
    let ans = arr.sort((a,b) => a-b)
    return ans[0] == ans[1] ? ans[ans.length-1] : ans[0]
}

// 들어온 배열안에 한가지만 다른 숫자가 존재할 때, 그 숫자를 리턴하는 문제
// sort로 정렬을 하게된다면 많은 수들중에서 다른 하나의 수가 맨 앞에 위치하거나, 맨 뒤에 위치하게 된다.
// 그렇다면 맨 앞의 숫자가 2번째 숫자와 같으면 맨 마지막이 다른 수, 아니면 맨 처음이 다른 수 이다.