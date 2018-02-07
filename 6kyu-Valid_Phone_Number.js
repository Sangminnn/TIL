function validPhoneNumber(phoneNumber){
    return phoneNumber.replace(/[(][0-9]{3}[)][ ][0-9]{3}[-][0-9]{4}/, '') === '' ? true : false
  }

  // (***) ***-**** 의 형태로 들어오는지 체크하는 문제
  // 아직 정규식이 한참 모자라다는걸 느낀당..


  function validPhoneNumber(phoneNumber){
      return (/^\(\d{3}\) \d{3}\-\d{4}$/g).test(phoneNumber)
  }

  // best practice
  // 괄호를 찾고싶은것이기때문에 괄호 앞에 역슬래시를 넣어줌
  // 이렇게 풀도록 노력해야겠당...
