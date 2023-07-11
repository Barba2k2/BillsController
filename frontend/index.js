function onChangeEmail() {
  toggleButtonDisable();
  toggleEmailErros();
}

function onChangePassword() {
  toggleButtonDisable();
  togglePasswordErros();
}

function login() {
  showLoading();
  firebase
    .auth()
    .signInWithEmailAndPassword(form.email().value, form.password().value)
    .then((response) => {
      hideLoading();
      window.location.href = "pages/home/home.html";
    })
    .catch((error) => {
      hideLoading();
      alert(getErrorMessage(error));
    });
}

function getErrorMessage(error) {
  if (error.code == "auth/user-not-found") {
    return "Usuário não encontrado";
  }
  if (error.code == "auth/wrong-password") {
    return "Senha Inválida";
  }
  return error.message;
}

function register() {
  window.location.href = "pages/register/register.html";
}

function recoverPassword() {
  showLoading();
  firebase
    .auth()
    .sendPasswordResetEmail(form.email().value)
    .then(() => {
      hideLoading();
      alert("E-mail enviado com sucesso");
    })
    .catch((error) => {
      hideLoading();
      alert(getErrorMessage(error));
    });
}

function isEmailValid() {
  const email = form.email().value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function toggleEmailErros() {
  const email = form.email().value;
  form.emailRequiredError().style.display = email ? "none" : "block";

  form.emailInvalidError().style.display = validateEmail(email)
    ? "none"
    : "block";
}

function togglePasswordErros() {
  const password = form.password().value;

  form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonDisable() {
  const emailValid = isEmailValid();
  form.recoverPassword().disabled = !emailValid;

  const passwordValid = isPasswordValid();
  form.loginButton().disabled = !emailValid || !passwordValid;
}

function isPasswordValid() {
  const password = form.password().value;
  if (!password) {
    return false;
  }
  return true;
}

const form = {
  email: () => document.getElementById("email"),
  emailInvalidError: () => document.getElementById("email-invalid-error"),
  emailRequiredError: () => document.getElementById("email-required-error"),
  loginButton: () => document.getElementById("login-button"),
  password: () => document.getElementById("password"),
  passwordRequiredError: () =>
    document.getElementById("password-required-error"),
  recoverPassword: () => document.getElementById("recover-password-button"),
};
