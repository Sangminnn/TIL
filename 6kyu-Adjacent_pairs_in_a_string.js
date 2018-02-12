function countAdjacentPairs(searchString) {
    let count = 0, i
    const str = searchString.split(' ')
    
    for(i = 0 ; i < str.length; i++){
      if(str[i-1] != str[i] && str[i] == str[i+1]) count++;
    }
    return count
  }

  // 인풋값으로 들어오는 string에서 단어들이 공백으로 나누어져있는데
  // 그 단어들이 대소문자 관계없이 연속되는 단어가 몇개의 무리로 이루어져 있는지 그 수를 구하는 문제
  // ex) 'cat cat dog dog cat cat' -> 3
  // ex2) 'cat cat cat cat dog dog' => 2

  function countAdjacentPairs(searchString) {
    var result = searchString.match(/(\b\w+)\s\1/ig);
    return result == null ? 0 : result.length;
  }

  // clever 답안
  // \b의 경우 문자의 경계가 되는 부분, 즉 그 단어의 맨앞이나 맨뒤인데,
  // \w+가 맨앞에 있고 공백 한개, 그리고 \1에 따라 (\b\w+)에 매치된 것이 따라오는 것을 찾는 정규식이다.