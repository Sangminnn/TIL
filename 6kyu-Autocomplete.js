function autocomplete(input, arr){
    
    input = input.replace(/[^A-Za-z]/g,"")
  
    let i = 0;
    let ans = []
    let fil = input.length
    
    while(i < arr.length){
      if(arr[i].substr(0, fil).toLowerCase() == input) ans.push(arr[i]);
      i++;
      
      if(ans.length == 5) break;
    }
    return ans;
}

// input에는 앞글자가, arr 에는 여러 문자들이 배열로 들어온다.
// input의 값을 맨앞에 가지고있는 arr들을 최대 5개까지 리턴하는 문제
// new RegExp를 사용하고싶지만, 맨앞문자를 검사하는 ^를 접목시키는 방법을 고안하지 못함.


function autocomplete(input, dictionary){
    var r = new RegExp('^' + input.replace(/[^a-z]/gi,''), 'i');
    return dictionary.filter(function(w){ return r.test(w); }).slice(0, 5);
}

// 위의 코드는 필자가 구현하고자했던 정규식을 통한 문제 풀이법이다.
// new RegExp의 첫번째 인자에 정규식의 다른 속성 (ex. '^')을 사용할 수 있다는 것을 알았다.