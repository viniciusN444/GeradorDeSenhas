// Selecionando elementos do DOM
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let passwordElement = document.querySelector("#password");

let containerPassword = document.querySelector(".container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";

// Definindo o valor inicial do tamanho da senha
sizePassword.innerHTML = sliderElement.value;

// Atualizando dinamicamente o tamanho da senha conforme o slider é movido
sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

// Função para gerar a senha
function generatePassword() {
    let newPassword = "";
    for (let i = 0; i < sliderElement.value; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        newPassword += charset[randomIndex];
    }

    // Exibindo a senha gerada e removendo a classe "hide" para mostrar o contêiner
    passwordElement.textContent = newPassword;
    containerPassword.classList.remove("hide");

    return newPassword; // Retornando a senha gerada
}

// Evento de clique no botão para gerar a senha
buttonElement.addEventListener('click', function() {
    generatePassword(); // Chamando a função para gerar a senha
});

// Função para copiar a senha para a área de transferência
function copyPassword() {
    let newPassword = generatePassword(); // Chamando a função para gerar a senha e obtendo a senha gerada
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(newPassword); // Copiando a senha para a área de transferência
}

