String.prototype.isAudio= function(){
  return this.match(/([a-zA-Z]+)\.(flac|mp3|alac|aac)/g) && this.match(/([a-z]+)\.(flac|mp3|alac|aac)/ig)[0] == this ? true : false
};
String.prototype.isImage= function(){
  return this.match(/([a-zA-Z]+)\.(jpg|jpeg|png|bmp|gif)/g) && this.match(/([a-z]+)\.(jpg|jpeg|png|bmp|gif)/ig)[0] == this ? true : false
};

// 문자열이 대소문자구분없이 알파벳으로만 이루어진 파일명과 그에 맞는 확장자를 가지고있는지 검사하는 문제
// 이런 문제에서 test, ^와 $ 를 사용하면 더 좋은데 습관적인 풀이가 나왔다

String.prototype.isAudio= function() { return /(^[a-zA-Z]+)\.(flac|mp3|alac|aac)$/.test(this) }
String.prototype.isImage= function() { return /(^[a-zA-Z]+)\.(jpg|jpeg|png|bmp|gif)$/.test(this) }

// 이게 위의 문제를 풀고 다시 다듬은 풀이

// 그리고 이게 이 문제의 best practice이다.