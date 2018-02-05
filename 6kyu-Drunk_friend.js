function decode(str) {
    if(typeof str != "string") return "Input is not a string"
    
    const big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const small = "abcdefghijklmnopqrstuvwxyz"
    
    return str.replace(/[a-z]/gi, (k) => {
      return small.indexOf(k) != -1 ? k = small[(small.length-1)-small.indexOf(k)] : k = big[(big.length-1)-big.indexOf(k)]
    })
  }

  // 술취한 친구가 문자를 보내는데 정해진 패턴으로 보낸다.
  // 이 패턴을 해독하여 원래 문자열로 바꾸는 문제
  // 패턴은 잘 보다보면 알파벳의 원래 index순서를 거꾸로 해서 나온 index의 알파벳값을 리턴하는 패턴이다.
  // 따라서 big과 small케이스를 두고 replace하는 방식으로 풀었음
  // charCodeAt도 사용가능.

  // best practice나 clever는 위의 풀이와 비슷