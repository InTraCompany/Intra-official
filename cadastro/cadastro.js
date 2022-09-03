//Caixa vermelha
function RedBox(box, p, phrase, color) {
  let dBox = document.getElementById(box);
  dBox.style.backgroundColor = color;
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
  if (
    email === undefined ||
    email === null ||
    email[0] === " " ||
    exist === true
  ) {
    let phrase =
      exist === true ? "Este email já está em uso" : "Email inválido";
    let pEmail = "email-isnt-correct";
    let boxEmail = "box-email";
    let color = "red";
    RedBox(boxEmail, pEmail, phrase, color);
    return false;
  } else {
    return true;
  }
}

//Confirmar senha
function ValidateCpwd(cpwd) {
  var Cpwd = cpwd.value;
  var pwd = document.getElementById("password").value;
  var pCpwd = "cpwd-isnt-correct";
  var boxCpwd = "box-cpwd";
  var phrase = "";
  var color = "white";
  if (Cpwd !== pwd) {
    phrase = "Senhas incompatíveis";
    color = "red";
    RedBox(boxCpwd, pCpwd, phrase, color);
    return false;
  } else {
    RedBox(boxCpwd, pCpwd, phrase, color);
    return true;
  }
  /*if (cPwd === undefined || cPwd == null) {
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
  }*/
}

//código para validar a primeira senha
function ValidatePwd(password) {
  var pwd = password.value;
  const pPwd = "pwd-isnt-correct";
  const boxPwd = "box-pwd";
  var phrase = "";
  var color = "red";
  if (pwd === undefined || pwd == null) {
    let phrase = "Senha inválida";
    RedBox(boxPwd, pPwd, phrase, color);
    return false;
  } else if (pwd.length < 8) {
    let phrase = "Senha muito curta";
    RedBox(boxPwd, pPwd, phrase, color);
    return false;
  } else if ("/[a-z][A-Z]/mug".search(pwd) === -1) {
    let phrase =
      "Para sua segurança recomendamos que varie entre letras minúsculas e maiusculas nesta senha";
    RedBox(boxPwd, pPwd, phrase, color);
    return false;
  } else if (1) {
    let phrase =
      "Para sua segurança recomendamos que adicione números a esta senha";
    RedBox(boxPwd, pPwd, phrase, color);
    return false;
  } else if ("".search(pwd) === -1) {
    let phrase =
      "Para sua segurança recomendamos que adicione caracteres especiais a esta senha";
    RedBox(boxPwd, pPwd, phrase, color);
    return false;
  } else if (ValidateCpwd() === false) {
    let phrase = "Senhas incompatíveis";
    RedBox("recaptcha-box", "recaptcha-not-accepted", phrase, color);
    return false;
  } else {
    RedBox(boxPwd, pPwd, phrase, color);
    return true;
  }
  /*if (pwd.length < 8) {
    let phrase = "Senha muito curta";
    RedBox(boxPwd, pPwd, phrase, color);
    return false;
  }
  if (pwd.match("/[0-9]/mu") === false) {
    let phrase =
      "Para sua segurança recomendamos que adicione números a esta senha";
    RedBox(boxPwd, pPwd, phrase, color);
    return false;
  }
  if (pwd.match("/[a-z]/mu") === false || pwd.match("/[A-Z]/mu") === false) {
    let phrase =
      "Para sua segurança recomendamos que varie entre letras minúsculas e maiusculas nesta senha";
    RedBox(boxPwd, pPwd, phrase, color);
    return false;
  }
  if (pwd.match("/[#$%^&*()+=-[]';,./{}|\":<>?~\\\\]/mu") === false) {
    let phrase =
      "Para sua segurança recomendamos que adicione caracteres especiais a esta senha";
    RedBox(boxPwd, pPwd, phrase, color);
    return false;
  }
  if (ValidateCpwd() === false) {
    let phrase = "Senhas incompatíveis";
    RedBox("recaptcha-box", "recaptcha-not-accepted", phrase, color);
    return false;
  }
  RedBox(boxPwd, pPwd, phrase, color);
  return true;*/
}

function ValidateRecaptcha() {
  var recap = document.getElementById("recaptcha");
  var boxRecap = "recaptcha-box";
  var pRecap = "recaptcha-not-accepted";
  var phrase = "";
  var color = "white";
  if (recap.checked === true) {
    RedBox(boxRecap, pRecap, phrase, color);
    return true;
  } else {
    phrase = "É necessário aceitar os termos para continuar";
    color = "red";
    RedBox(boxRecap, pRecap, phrase, color);
    return false;
  }
}

function ValidateTerms() {
  var terms = document.getElementById("terms");
  var boxTerms = "terms-box";
  var pTerms = "terms-not-accepted";
  var phrase = "";
  var color = "white";
  if (terms.checked === true) {
    return true;
  } else {
    phrase = "É necessário aceitar os termos para continuar";
    color = "red";
    RedBox(boxTerms, pTerms, phrase, color);
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
