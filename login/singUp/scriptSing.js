let inputUser = document.querySelector("#inputUser")
let labelUser = document.querySelector("#labelUser")

let inputSenha = document.querySelector("#inputSenha")
let labelSenha = document.querySelector("#labelSenha")


let labelConfirme = document.querySelector("#labelConfirme")
let inputConfirme = document.querySelector("#inputConfirme")

let senha = document.getElementById("mostrar")
let mostrarSenha = document.querySelector('#mostrarSenha')

let btn = document.getSelection("#button")

valid = false;

////VALIDAR USUARIO
inputUser.addEventListener("keyup", ()=>{
    if(inputUser.value.length >= 6){
        labelUser.innerHTML = "Nome completo"
        labelUser.setAttribute('style', 'color: #00e000')
        inputUser.setAttribute('style','border: solid 1px #00e000')
        valid = false;
       
        
        
    }else{
        labelUser.innerHTML = "*Insira no minimo 5 caracteres"
        labelUser.setAttribute('style', 'color:  #be0000e1')
        inputUser.setAttribute('style','border: solid 1px #be0000e1')
        
    }
})

////MOSTRAR SENHA INPUTSENHA
senha.addEventListener('click', ()=>{
    if(inputSenha.getAttribute('type')=="password"){
        inputSenha.setAttribute('type','text')
    }else{
        inputSenha.setAttribute('type','password')
    }
})

//// MOSTRAR SENHA INPUTCONFIRME
mostrarSenha.addEventListener("click", ()=>{
    if(inputConfirme.getAttribute('type')== 'password'){
        inputConfirme.setAttribute('type', 'text')
    }else{
        inputConfirme.setAttribute('type', 'password')
    }
})


///CONFIRMACAO DE SENHA 
function validar(){
    let inputSenha = document.querySelector("#inputSenha")
    let inputConfirme = document.querySelector("#inputConfirme")
    let labelSenha = document.querySelector("#labelSenha")
    let labelConfirme = document.querySelector("#labelConfirme")

    if(inputConfirme.value == inputSenha.value ){
        labelSenha.setAttribute('style','color: #00e000')
        labelConfirme.setAttribute('style','color: #00e000')
        inputSenha.setAttribute('style','border: solid 1px #00e000')
        inputConfirme.setAttribute('style','border: solid 1px #00e000')
        labelConfirme.innerHTML="Confirme Senha"
        labelSenha.innerHTML="Senha"

    }else{
        labelConfirme.setAttribute('style','color: #be0000e1')
        labelSenha.setAttribute('style','color: #be0000e1')
        inputSenha.setAttribute('style','border: solid 1px #be0000e1')
        inputConfirme.setAttribute('style','border: solid 1px #be0000e1')
        labelConfirme.innerHTML="*Senhas não conferem"
        labelSenha.innerHTML="*Senhas não conferem"

        
        
    }
}
   
  
    
   



