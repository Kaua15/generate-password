// VARIAVEIS
const generateBtn = document.querySelector('.generateBtn');
const inputPassword = document.querySelector('.inputPass');
const rangeFull = document.getElementById('numbercaracteres');
const optionList = document.querySelectorAll('.optionList li input');
const inputButton = document.querySelector('.input button');
document.querySelector('.wrapper-title span').innerHTML = rangeFull.value;
const senhas = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%&()-^~'
};

// FUNÇÃO DE GERAR SENHAS ALEATORIAS DE ACORDO COM NUMERO DE CARACTERES
function generatePassword() {
    let allsenhas = "", password = "", cont = 0, range = document.getElementById('numbercaracteres');

    // forEach que verifica quais checkbox estão ativados
    optionList.forEach((option) => {
        if (option.checked) {
            allsenhas += senhas[option.id];
        }
        else {
            cont++;
        }
    });

    // Se nenhum estiver ativado retorna nada
    if (cont === 4) {
        return '';
    }

    // Loop que roda de acordo com o numero do range
    for (let i = 0; i <= range.value - 1; i++) {
        let carater = Math.floor(Math.random() * allsenhas.length);
        password += allsenhas[carater]
    }
    return password;
}

// Evento de click generateBtn
generateBtn.addEventListener('click', () => {
    inputPassword.value = generatePassword();
    inputPassword.classList.add('active');
});


// Evento para mudar valor da quantidade caracteres da senha
rangeFull.addEventListener('input', () => {
    document.querySelector('.wrapper-title span').innerHTML = rangeFull.value;
});


// Evento para copiar a senha
inputButton.addEventListener('click', () => {
    inputPassword.disabled = false;
    inputPassword.select();
    document.execCommand('copy', false, null);
    inputButton.children[0].classList.remove('fa-copy');
    inputButton.children[0].classList.add('fa-check');
    inputButton.children[0].style.color = '#70C1B3';
    setTimeout(() => {
        inputButton.children[0].classList.remove('fa-check');
        inputButton.children[0].classList.add('fa-copy');
        inputButton.children[0].classList.add('fa-copy');
        inputButton.children[0].style.color = '#000';
    }, 1500);
    inputPassword.disabled = true;
});



