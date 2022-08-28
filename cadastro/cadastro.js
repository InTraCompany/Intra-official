//Caixa vermelha
function RedBox(box, p, phrase) {
  let dBox = document.getElementById(box);
  dBox.style.backgroundColor = "red";
  let dP = document.getElementById(p);
  dP.innerHTML = phrase;
}

//AJAX
function AJAX(atributo, valor) {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    return this.responseText;
  };
  xhttp.open("POST", "cadastro.php");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(atributo + "='" + valor + "'");
}

//código para validar o nome
function ValidateEmail() {
  var inputEmail = document.getElementsByName("email");
  var email = inputEmail.value;
  var exist = AJAX("email", email);
  var pEmail = document.getElementById("email-isnt-correct");
  if (
    email === undefined ||
    email === null ||
    email[0] === " " ||
    exist === true
  ) {
    let boxEmail = document.getElementById("email");
    boxEmail.style.backgroundColor = "red";
    pEmail.innerHTML =
      exist === true ? "Este email já está em uso" : "Email inválido";
  } else {
    return true;
  }
}

//código para validar a primeira senha
function ValidatePwd() {
  var pwd = document.getElementById("password").value;
  const pPwd = "pwd-isnt-correct";
  if (pwd === undefined || pwd == null) {
    let phrase = "Senha inválida";
    RedBox("pwd", pPwd, phrase);
    return false;
  }
  if (pwd.length < 8) {
    let phrase = "Senha muito curta";
    RedBox("pwd", pPwd, phrase);
    return false;
  }
  if (pwd.match("/[0-9]/mu") === false) {
    let phrase =
      "Para sua segurança recomendamos que adicione números a esta senha";
    RedBox("pwd", pPwd, phrase);
    return false;
  }
  if (pwd.match("/[a-z]/mu") === false || pwd.match("/[A-Z]/mu") === false) {
    let phrase =
      "Para sua segurança recomendamos que varie entre letras minúsculas e maiusculas nesta senha";
    RedBox("pwd", pPwd, phrase);
    return false;
  }
  if (pwd.match("/[#$%^&*()+=-[]';,./{}|\":<>?~\\\\]/mu") === false) {
    let phrase =
      "Para sua segurança recomendamos que adicione caracteres especiais a esta senha";
    RedBox("pwd", pPwd, phrase);
    return false;
  }
  return true;
}

function ValidateCpwd() {
  var cPwd = document.getElementsByName("cpassword").value;
  var pCpwd = document.getElementById("cpwd-isnt-correct");
  if (cPwd === undefined || cPwd == null) {
    pCpwd.innerHTML = "Senha inválido";
    return false;
  }
  if (cPwd.length < 8) {
    pCpwd.innerHTML = "Senha inválido";
    return false;
  }
  if (cPwd.match("/[0-9]/mu") === false) {
    pCpwd.innerHTML =
      "Para sua segurança recomendamos que adicione números a esta senha";
    return false;
  }
  if (cPwd.match("/[a-z]/mu") === false || cPwd.match("/[A-Z]/mu") === false) {
    pCpwd.innerHTML =
      "Para sua segurança recomendamos que varie entre letras minúsculas e maiusculas nesta senha";
    return false;
  }
  if (cPwd.match("/[#$%^&*()+=-[]';,./{}|\":<>?~\\\\]/mu") === false) {
    pCpwd.innerHTML =
      "Para sua segurança recomendamos que adicione caracteres especiais a esta senha";
    return false;
  }
  return true;
}

function ValidateRecaptcha() {
  var recap = document.getElementById("recaptcha");
  if (recap.checked == true) {
    return true;
  } else {
    let phrase = "É necessário aceitar os termos para continuar";
    RedBox("recaptcha-box", "recaptcha-not-accepted", phrase);
    return false;
  }
}

function ValidateTerms() {
  var terms = document.getElementById("terms");
  if (terms.checked === true) {
    console.log("tems checked");
    return true;
  } else {
    let phrase = "É necessário aceitar os termos para continuar";
    RedBox("terms-box", "terms-not-accepted", phrase);
    return false;
  }
}

function Validate() {
  if (
    ValidatePwd() &&
    ValidateCpwd() &&
    ValidateRecaptcha() &&
    ValidateTerms()
  ) {
  } else {
  }
}

//Ham menu
function hamMenu(menu) {
  menu.classList.toggle("active");
  var active = menu.classList.contains("active");
  menu.setAttribute("aria-expanded", active);
  if (active) {
    menu.setAttribute("aria-label", "Fechar Menu");
  } else {
    menu.setAttribute("aria-label", "Abrir Menu");
  }
}
