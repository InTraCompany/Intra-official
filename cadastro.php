<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta name="Author" content="InTra Company" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel="stylesheet" type="text/css" href="menu.css" />
    <!-- Atributo name da meta tag escrito incorretamente -->
    <meta
      name="descripiont"
      content="Ainda não possui cadastro, cadastre-se agora e venha aproiveitar todos os benefícios."
    />
    <meta name="robots" content="noindex, nofollow" />
    <meta http-equiv="content-language" content="pt-br" />
    <title>Cadastro</title>
  </head>
  <?php
    if(isset($_GET['r'])){
      echo('<string>alert("Recaptcha inválido")</string>');
    }
  ?>
  <?php
    if (isset($_POST['submit'])){
      $url = "https://www.google.com/recaptcha/api/siteverify";
      $secret = "6LcqsOghAAAAAOv7LDGOkyR1qxPLtwhqWSMt7oPu";
      $response = $_POST["token_generate"];
      $remoteip = $_SERVER['REMOTE_ADDR'];
      $request = file_get_contents($url. "?secret=".$secret."&response=".$response);
      $result = json_decode($request);
      if ($result->success == true and $result->score > (7/10)) {
      }else{
        header("location:cadastro.php?r=false");
      }
    }
  ?>
  <body>
    <header id="header">
      <a id="logo" href="">Logo</a>
      <nav id="nav">
        <button
          aria-label="Abrir Menu"
          id="btn-mobile"
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
          onclick="hamMenu(this)"
        >
          Menu
          <span id="hamburger"></span>
        </button>
        <ul id="menu" role="menu">
          <li><a href="">Home</a></li>
          <li><a href="">Cursos</a></li>
          <li><a href="">Vagas</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="form">
        <!-- Incoerência nos atributos role dos componentes -->
        <form
          name="registration"
          method="POST"
          id="registration"
          action="#"
          role="registration"
        >
          <h1>Cadastro</h1>
          <button type="button" name="Google">Continuar com o Google</button>
          <button type="button" name="FaceBook">
            Continuar com o FaceBook
          </button>
          <section id="box-email">
            <label class="text">Digite o seu email:</label>
            <input
              type="email"
              name="email"
              class="fields"
              role="email"
              id="email"
              required
              min="1"
              max="128"
              onkeyup="ValidateEmail()"
              ;
            />
            <p id="email-isnt-correct"></p>
          </section>
          <section id="box-pwd">
            <label class="text">Digite a sua senha:</label>
            <input
              type="password"
              name="password"
              class="fields"
              role="senha"
              required
              min="8"
              id="password"
              onkeyup="ValidatePwd()"
            />
            <p id="pwd-isnt-correct"></p>
          </section>

          <!-- Campos diferentes não devem possuir o mesmo nome (password), do contrário não há como resgatá-los -->
          <section id="box-cpwd">
            <label class="text">Confirme sua senha:</label>
            <input
              type="password"
              name="cpassword"
              class="fields"
              role="confirmacao"
              id="cpassword"
              required
              min="8"
              onkeyup="ValidateCpwd()"
            />
            <p id="cpwd-isnt-correct"></p>
          </section>

          <!-- Checkbox precisa de um valor (booleano) para ser validado -->
          <section class="recaptcha" id="recaptcha-box">
            <input type="hidden" name="token_generate" id="token_generate" />
            <script src="https://www.google.com/recaptcha/api.js?render=6LcqsOghAAAAAHXfAz2IvS9JDTpxUDb-KVJQfc8q"></script>
          </section>

          <!-- Checkbox precisa de um valor (booleano) para ser validado -->
          <section id="terms-box">
            <input
              type="checkbox"
              name="terms"
              role="validacao"
              id="terms"
              required
              onclick="ValidateTerms()"
            />
            <label>Aceito os termos de uso!</label>
            <p id="terms-not-accepted"></p>
          </section>
          <!-- Colocar nomes mais significativos, como "userController" ou "login" -->
          <input type="submit" name="submit" id="submit" />
        </form>
       
      </section>

      <!-- Faltou a implementação do componente? -->
      <section class="recaptcha"></section>
    </main>
    <footer>
      <section class="dark_bar"></section>
    </footer>
  </body>
  <script src="cadastro.js"></script>
  <script src="menu.js"></script>
</html>
<script>
  grecaptcha.ready(function () {
    grecaptcha
      .execute("6LcqsOghAAAAAHXfAz2IvS9JDTpxUDb-KVJQfc8q", {
        action: "submit"
      })
      .then(function (token) {
        var response = document.getElementById("token_generate");
        response.value = token;
      });
  });
</script>