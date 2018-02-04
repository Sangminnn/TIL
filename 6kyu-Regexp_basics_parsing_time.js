String.prototype.toSeconds=function(){
    if(this.match(/[0-9]{2}/g).every(n => {return n.length == 2})){ 
      const time = this.match(/[0-9]{2}/g)
      if(time[1] > 59 || time[2] > 59) return null
      
      return (+time[0])*3600 + (+time[1])*60 + (+time[2])
    } else {
      return null
    }
  }

  // "00:00:00" 처럼 모든 자리수가 2이고, 분, 초에는 60이 넘지 않는 값이 들어올 시에 
  // 그 값을 모두 초로 변환해서 리턴하는 문제
  // 정규식을 거의 안쓴 풀이.

  String.prototype.toSeconds = function () {
    const m = this.match(/^(\d\d):([0-5]\d):([0-5]\d)$/)
    return m ? 3600 * m[1] + 60 * m[2] + 1 * m[3] : null
  }
  // best practice
  // 시간쪽에는 어떤 수던지 두자리 수가 들어오면 되고, 분/초는 60이하의 수로 이루어진 것만 찾고
  // 그에 맞는 값이 있으면 변환, 아니면 null을 리턴하는 방식이다.
  // 이렇게 풀도록 노력해야겠당 ..
  