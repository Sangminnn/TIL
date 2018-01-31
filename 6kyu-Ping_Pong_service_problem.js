function service(score){
    let a = +score.split(':').shift()
    let b = +score.split(':').pop()
    
    if(a+b < 40 && ((a+b) % 10) < 5){
        return "first" }
    else if(a >= 20 && b >= 20 && ((a+b-40)%4) < 2){ 
        return  "first" } else { return "second" }
 }

 // 탁구게임에서 점수를 보고 그때 누구의 차례인지를 리턴하는 문제
 // 듀스전까지는 5번씩 번갈아서 차례가 돌아오기 때문에 두 점수를 합한 값을 10으로 나눈 나머지로 계산
 // 듀스후에는 2번씩 번갈아서 차례가 돌아오기 때문에 4로 나눈 나머지가 2보다 작은지 큰지로 차례를 계산
 // 생각해보니 문제에서 19:21 같은 상황은 주어지지 않는다고 했으므로
 // else if의 조건문에 있는 듀스상황조건문은 지워도 된다.

 function service(score){
    var scores = score.split(':');
    var sumScores = +scores[0] + +scores[1];
    return Math.floor(sumScores / (sumScores < 40 ? 5 : 2)) % 2 === 0 ? 'first' : 'second';
}

// clever 답안