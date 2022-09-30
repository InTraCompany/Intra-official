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
  var email = document.getElementById("email").value;
  var exist = AJAX("email", email);
  var pEmail = "email-isnt-correct";
  let boxEmail = "box-email";
  let color = "red";
  if (
    email === undefined ||
    email === null ||
    email[0] === " " ||
    email.search(/[@]/) === -1 ||
    exist === true
  ) {
    let phrase =
      exist === true ? "Este email já está em uso" : "Email inválido";
    RedBox(boxEmail, pEmail, phrase, color);
    return false;
  } else {
    let phrase = "";
    let color = "green";
    RedBox(boxEmail, pEmail, phrase, color);
    return true;
  }
}

//código para validar a primeira senha
function ValidatePwd() {
  var pwd = document.getElementById("password").value;
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
  } else if (pwd.search(/[0-9]/) === -1) {
    let phrase =
      "Para sua segurança recomendamos que adicione números a esta senha";
    RedBox(boxPwd, pPwd, phrase, color);
    return false;
  } else if (pwd.search(/[a-z]/) === -1 || pwd.search(/[A-Z]/) === -1) {
    let phrase =
      "Para sua segurança recomendamos que varie entre letras minúsculas e maiusculas nesta senha";
    RedBox(boxPwd, pPwd, phrase, color);
    return false;
  } else if (
    pwd.search(
      /[\s*#\s*$\s*%\s*^\s*&\s**\s*(\s*)\s*+\s*=\s*-\s*[\s*\]\s*!\s*@\s*¨\s*£\s*¢\s*¬\s*°\s*º\s*ª\s*'\s*;\s*,\s*.\s*{\s*}\s*|\s*"\s*:\s*<\s*>\s*?\s*~\s*\\\s*/\s*Ç]/g
    ) === -1
  ) {
    let phrase =
      "Para sua segurança recomendamos que adicione caracteres especiais a esta senha";
    RedBox(boxPwd, pPwd, phrase, color);
    return false;
    /*} else if (ValidateCpwd() === false) {
    let phrase = "Senhas incompatíveis";
    RedBox("recaptcha-box", "recaptcha-not-accepted", phrase, color);
    return false;*/
  } else {
    color = "green";
    RedBox(boxPwd, pPwd, phrase, color);
    return true;
  }
}

//Confirmar senha
function ValidateCpwd() {
  var Cpwd = document.getElementById("cpassword").value;
  var pwd = document.getElementById("password").value;
  var pCpwd = "cpwd-isnt-correct";
  var boxCpwd = "box-cpwd";
  var phrase = "";
  var color = "green";
  if (Cpwd !== pwd) {
    phrase = "Senhas incompatíveis";
    color = "red";
    RedBox(boxCpwd, pCpwd, phrase, color);
    return false;
  } else {
    RedBox(boxCpwd, pCpwd, phrase, color);
    return true;
  }
}


function ValidateTerms() {
  var terms = document.getElementById("terms");
  var boxTerms = "terms-box";
  var pTerms = "terms-not-accepted";
  var phrase = "";
  var color = "white";
  if (terms.checked === true) {
    RedBox(boxTerms, pTerms, phrase, color);
    terms.setAttribute("aria-checked", true);
    return true;
  } else {
    phrase = "É necessário aceitar os termos para continuar";
    color = "red";
    RedBox(boxTerms, pTerms, phrase, color);
    return false;
  }
}

//Ativar validatação total
const form = document.getElementById("registration");
form.addEventListener("submit", (e) => {
  if (
    ValidateEmail() &&
    ValidatePwd() &&
    ValidateCpwd() &&
    ValidateTerms()
  ) {
  } else {
    e.preventDefault();
    window.alert(
      "Não foi possível enviar o formulário, verifique se todas as informações estão corretas"
    );
    return false;
  }
});
