Array.prototype.square = function() { return this.map((n) => { return n*n }) }
Array.prototype.cube = function() { return this.map((n) => {return n*n*n }) }
Array.prototype.sum = function() { return this.reduce((a,b) => a+b) }
Array.prototype.average = function() { return this.length ? (this.reduce((a,b) => a+b))/this.length : NaN}
Array.prototype.even = function() { return this.filter(n => { return n % 2 == 0 }) }
Array.prototype.odd = function() { return this.filter(n => { return n % 2 == 1 }) }

// Array의 메서드들을 새로 정의하는 문제
// 처음에 [].square() 이런식의 계산에서 값을 구하는 방식때문에
// 프로토타입을 사용
// 기타 내용은 어려운 내용은 없음.