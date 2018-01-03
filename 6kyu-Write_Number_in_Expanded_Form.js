function expandedForm(num) {
    let ans = [];
    let arr = num.toString().split('').reverse()
    
    arr.map((val, idx) => {
      if(val != 0) ans.push(val+ "0".repeat(idx))
    })
    
    return ans.reverse().join(" + ")
  }

  // 숫자가 입력되면 그 숫자를 자리수별로 펼치는 문제
  // ex) 70304 => "70000 + 300 + 4"
  // 인덱스는 왼쪽부터 세는 반면, 수의 자릿수는 오른쪽부터 세기 때문에
  // 들어오는 숫자값을 문자화 후 reverse하여 0이 아닌 수에만 0을 추가해주는 방법을 선택했다.

  // 처음에는 forEach를 사용하여 arr에서의 각각의 item값의 인덱스를 찾아보려고 했다.
  // 하지만 같은 수가 있을 경우에 오류가 발생하여 map함수를 이용하였다. 