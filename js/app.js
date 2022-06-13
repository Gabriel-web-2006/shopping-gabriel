var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn svg');       /**Variaveis ------------- */


/**esta ufnção mostra o meu MOBILE */
function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
        
    }else{
        ul.classList.add('open');
    }

}


/**esta função exibe uma meensagem dizendo "se o usuário quer adcionar um item ao carrinho" */
function comprar() {
    confirm('Adicionar Um Iten ao Carrinho ! ')
    location.href = "checkout.html"
}


/* está função mostra uma caixa de dialogo quando o usuário não está logado como sistema........... gabriel*/ 
function pedir() {
    alert('Por favor faça o Login')
}


/*Validando o meu login ------------*/

function validar() {
    var email = document.querySelector('input#email')
    var senha = document.querySelector('input#senha')

    var pegar_email = String(email.value)
    var pegar_senha = Number(senha.value)

    alert(pegar_email + ' Voçê Está Sem permissão de Acesso.')
}
function userconta() {
    alert('[ERRO] Acesso Negado !')
}


//

function contactosform() {
    var n = document.querySelector('input#nome')
    var p_nome = String(n.value)

    if(p_nome == "") {
        alert('[ERRO] - Campo Obrigatório !')
    }
}


function now() {
    alert('[ERRO] - Pedimos Desculpa !')
}