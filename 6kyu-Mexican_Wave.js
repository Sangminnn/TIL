function wave(string){
    let ans = [];
    let mid;
    let i = 0;
    
    while(i < string.length){
      if(string[i] != ' ') {
        mid = string.split('');
        mid[i] = mid[i].toUpperCase();
        ans.push(mid.join(''));
      }
      i++;
    }
    return ans
   }

// string이 들어오면 공백을 제외한 글자만 차례대로 대문자로 만들면서 배열에 추가
// 이후 그 배열을 리턴하는 문제
// 처음에 코드를 간단하게하고자 replace를 사용하려고했으나
// replace는 string에서 그 값을 차례대로 찾기떄문에 중복된 문자가 나올시 원하는대로 안나옴
// 따라서 매번 리셋해주는 반복문을 통해서 배열을 만들었다.

function wave(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}

// clever 답안
// forEach를 이용하여 원하는 문자를 하나씩 대문자화 하고 배열에 넣어준다.
