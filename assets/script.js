const mode = document.getElementById('mode_icon');

mode.addEventListener('click',()=> {
    const form = document.getElementById('tudo');
    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return;
    }

    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');
    form.classList.remove('dark');
});




const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('button-entrar');

if (localStorage.getItem('isLoggedIn') === 'true') {
  window.location.href = 'https://github.com/davidgd11?tab=repositories';
}

loginButton.addEventListener('click', function(event) {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === 'Admin@gmail.com' && password === '123456') {

    alert("Usuários válidos");

    // Redirecionar para a URL desejada
    window.location.href = 'https://github.com/davidgd11?tab=repositories';
  } else {
    alert('Usuário ou senha inválidos.');
  }

  console.log(username,password);
});



function mostrarSenha(){
    var inputPass = document.getElementById('password');
    var btnShowPass = document.getElementById('btn-senha');

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text');
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill');
    }
    else{
        inputPass.setAttribute('type','password');
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill');
    }
}