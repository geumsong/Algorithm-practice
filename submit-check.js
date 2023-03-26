// 로그인 유효성 검사

function submit_check() {
  let id = document.querySelector("id");
  let password = document.querySelector("password");

  if (id.value == "") {
    // id를 입력하지 않으면, 아마 ""는 공백인 상태를 의미하는 것 같다.
    alert("아이디를 입력하세요.");
    id.focus(); //focus(): input태그를 마우스로 클릭하여 입력상태로 만든것을 포커스를 얻었다고 한다.
    return false;
  } else if (password.value == "") {
    alert("비밀번호를 입력하세요.");
    password.focus();
    return false;
  } else {
    alert("로그인되었습니다 :)");
    submit();
  }
}
