function ride(group,comet){
    const abc = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let num1 = 1
    let num2 = 1
    
    group.split('').forEach((mat) => num1 = num1*abc.indexOf(mat))
    comet.split('').forEach((mat) => num2 = num2*abc.indexOf(mat))
    return num1 % 47 == num2 % 47 ? "GO" : "STAY"
  }
  
  // group과 comet에 문자열이 들어오는데 그 문자열에 있는 알파벳을 알파벳순서값들의 곱으로 구하고
  // 그 값을 47로 나눈 나머지가 같은지를 찾는 문제
  // group과 comet을 숫자화한 값들의 곱을 좀더 깔끔하게 구할 수 있을것같음