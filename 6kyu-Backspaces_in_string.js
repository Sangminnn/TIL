function clean_string(s) {
	if(s == '') return ''
  
  while(s.match(/[^#][#]/g)){
    s = s.replace(/[^#][#]/g, '')
  }
  return s.replace(/[#]/g, '')
};

// string이 들어오면 그 안에서 #는 백스페이스로 인식하여 적용시키고 남은 string을 리턴하는 문제