function camelize(str){
    let strs = str.toLowerCase().match(/[a-z]+|[0-9]+/g)
    let ans = []
    
    strs.forEach((mat) => {
      ans.push(mat.replace(/^([a-z]|[0-9])/, (tar) => { return tar.toUpperCase() }))
    })
    return ans.join('')
  }

// 문자, 공백, 숫자, 특수문자등이 들어오면 그 중 문자와 숫자만 CamelCase로 변환하는 문제
// 한번 더 풀어보면 좀더 간결하게 풀 수 있을것 같다.