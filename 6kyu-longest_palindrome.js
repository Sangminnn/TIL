var longestPalindrome=function(s){
    if(s == "") return 0
    
    var tar = s.split('').reverse().join('');
    var i = tar.length;
    var ans;
    
    while(i >= 1){  
      var arr = [];
      for(var j = 0; i+j <= tar.length; j++){
        arr.push(tar.substr(j, i))
      }
      arr.forEach(function(item) {
        if(s.match(item) != null) ans = i;
      })
      if(ans != undefined) break;
      
      i--
    }
    return ans;
  }