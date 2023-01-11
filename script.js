///VARIAVEIS
let inputUser = document.querySelector("#inputUser");
let labelUser = document.querySelector("#labelUser");
let validUs = false

let inputSenha = document.querySelector("#inputSenha");
let labelSenha = document.querySelector("#labelSenha");
validSenha = false



let btn = document.querySelector("#button")

///VALIDAÇÃO DO CAMPO USUARIO
inputUser.addEventListener('keyup', () =>{
   if(inputUser.value.length <=3){
    validUs = false
    inputUser.setAttribute('style', 'border: 1px #be0000e1 solid')
    labelUser.setAttribute('style', 'color: #be0000e1')
    labelUser.innerHTML = "*Insira no minimo 3 caractes";
   }else{
    inputUser.setAttribute('style', 'border: #00e000 1px solid')
    labelUser.setAttribute('style', 'color: #00e000')
    labelUser.innerHTML = "Usuario (a)"
    validUs = true
    
}
});


///VALIDAÇÃO DO CAMPO SENHA
inputSenha.addEventListener('keyup', ()=>{
    if(inputSenha.value.length <=10){
        inputSenha.setAttribute('style', 'border: 1px #be0000e1 solid')
        labelSenha.setAttribute('style', 'color: #be0000e1')
        labelSenha.innerHTML = "Senha invalida"
        validSenha = false
       }
       else{
        inputSenha.setAttribute('style', 'border: #00e000 1px solid')
        labelSenha.setAttribute('style', 'color: #00e000')
        labelSenha.innerHTML = "Senha"
        validSenha = true
    }
})


///MOSTAR SENHA
function mostrarSenha(){
    let btn = document.querySelector('#fa-eye')
    let inputSenha = document.querySelector('#inputSenha')

    if(inputSenha.getAttribute('type')=='password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type','password')
    }
}
 function cadastrar(){
    let msg = document.getElementById('res')

    if(validUs && validSenha){
        msg.innerHTML = "Logado"
    }else{
        msg.innerHTML = "VERIFIQUE OS CAMPOS DESCATADOS"
    }

 }








