// 1. id에서 속성값 가져오기 (#)
let elInputUsername = document.querySelector("#username");
let elInputPassword = document.querySelector("#password");
let elInputPasswordRetype = document.querySelector("#password-retype");
let elNumbertype = document.querySelector("#phonenumber");
let elJoinButton = document.querySelector("#joinbutton");

//2. 성공메시지, 실패메시지에 대한 값을 출력할 것이다.
//   class에서 속성값 가져오기 (.)
let elFailureMessage = document.querySelector(".failure-message");
let elSuccessMessage = document.querySelector(".success-message");
let elMisMatchMessage = document.querySelector(".mismatch-message");
let elMisMatchNumberMessage = document.querySelector(".misnumbermessage");

elJoinButton.disabled = true; // disabled: 숨김처리속성 ??? 무슨뜻인지 물어보기

// 입력창에 글자를 입력할 때, 성공메시지와 실패메시지를 보여주는 함수
elInputUsername.onkeyup = function () {
  if (isMoreThan4Length(elInputUsername.value)) {
    elSuccessMessage.classList.remove("hide"); // "사용할 수 없는 아이디입니다." 라는 문구는 hide된 상태임.  키보드를 눌렀다가 땠을 때 hide라는 속성을 제거한다.
    elFailureMessage.classList.add("hide"); // "4글자 이상이어야합니다." 키보드를 눌렀다 뗐을 때 hide속성을 추가한다.
  } else {
    elSuccessMessage.classList.add("hide"); // 그게 아니라면 (키보드를 눌렀다가 떼지 않았다면) "사용할 수 없는 아이디입니다."라는 속성의 문구 중 hide라는 속성을 더한다.
    elFailureMessage.classList.remove("hide"); // (키보드를 눌렀다가 떼지 않았다면) "4글자 이상이어야합니다"라는 key값의 hide속성을 제거한다
  }
};

// 글자수가 4개 이상이면
function isMoreThan4Length(value) {
  return value.lenghth >= 4;
}

// 비밀번호 입력창에 값을 입력하면, 비밀번호 값과 비밀번호 값이 일치하지 않으면 불일치 메시지를 표시하는 함수
elInputPasswordRetype.onkeyup = function () {
  if (isMatch(elInputPassword.value, elInputPasswordRetype)) {
    // 두 개의 속성값이 맞으면 (="비밀번호가 일치하지 않았을 때": 왜냐하면 애초에 문장이 부정문인 비밀번호가 일치하지 않았다는거니까)
    elMisMatchMessage.classList.add("hide"); // "두 비밀번호가 일치하지않습니다"값의 hide속성을 추가한다.
  } else {
    return false; // true : 비밀번호가 일치하지 않은것 , false : 비밀번호가 일치하는것
  }
};

// 비밀번호 값과 비밀번호 확인값이 일치하는지 판별하는 함수
function isMatch(password1, password2) {
  if (password1 === password2) {
    return true;
  } else {
    return false;
  }
}

// 전화번호 값을 입력할때, 숫자가 아니면 불일치 메시지를 표시하는 함수
elNumbertype.onkeyup = function () {
  if (isNumbermatch(elNumbertype.value)) {
    elMisMatchNumberMessage.classList.add("hide"); // 가려져있던 "숫자를 입력해주세요" 메시지를 추가한다.
  } else {
    elMisMatchMessage.classList.remove("hide"); // 키보드를 치지 않았다면 "숫자를 입력해주세요"값을 제거한다.
  }
};

//전화번호 값을 숫자값만 받는 함수
function isNumbermatch(value) {
  let phonenumber = /^[0-9]*$/; // 폰넘버라는 변수를 선언하고 그 변수는 0-9까지 입력할 수 있도록 한다.
  if (phonenumber.test(value) === true) {
    return true;
  } else {
    return false;
  }
}

elInputUsername.addEventListener("keyup", button);
elInputPassword.addEventListener("keyup", button);
elInputPasswordRetype.addEventListener("keyup", button);
elNumbertype.addEventListener("keyup", button);

//아이디, 비밀번호, 비밀번호 확인, 전화번호 값을 모두 입력했을 때 회원가입 버튼이 활성화되는 함수
function button() {
  switch (
    !(
      elInputUsername.value &&
      elInputPassword.value &&
      elInputPasswordRetype.value &&
      elNumbertype.value
    )
  ) {
    case true:
      elJoinButton.disalbled = true;
      break;
    case false:
      elJoinButton.disabled = false;
      break;
  }
}

/////////////////////////////////////////////로그인 유효성 검사

<script></script>;
