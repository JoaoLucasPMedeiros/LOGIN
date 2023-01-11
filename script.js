
console.log((true == true) && (true == true))


function validarUsuario(){
    let inputUser = document.querySelector("#inputUser")
    let labelUser = document.querySelector("#labelUser")
    let validUser = false

    if(inputUser.value.length <=3){
        inputUser.setAttribute('style' ,'border: 1px #be0000e1 solid')
        labelUser.setAttribute('style' ,'color: #be0000e1')
        labelUser.innerHTML = '*Insira no minimo 3 caracteres'
        let validUser = false   
    }
    
    else{
        inputUser.setAttribute('style' ,'border: #00e000 1px solid')
        labelUser.setAttribute('style' ,'color: #00e000;')
        labelUser.innerHTML = 'Usuario (a)'
        let validUser = true
        
    }  
}

function validarSenha(){
    let inputSenha = document.querySelector("#inputSenha")
    let labelSenha = document.querySelector("#labelSenha")

    console.log(inputSenha)
    if(inputSenha.value.length <=8){
        labelSenha.setAttribute('style' ,'color: #be0000e1')
        inputSenha.setAttribute('style' ,'border: #be0000e1 1px solid')
        labelSenha.innerHTML = '*Insira no minimo 8 caracteres'
    }
    
    else{
        inputSenha.setAttribute('style' ,'border: #00e000  1px solid')
        labelSenha.setAttribute('style' ,'color: #00e000 ')
        labelSenha.innerHTML = 'Senha'
    }

}




function mostrarSenha(){
    let btn = document.querySelector('#fa-eye')
    let inputSenha = document.querySelector('#inputSenha')

    if(inputSenha.getAttribute('type')=='password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type','password')
    }
}

function validar(){
    let inputSenha = document.querySelector('#inputSenha')
    let inputUser = document.querySelector("#inputUser")
    console.log((true == true) && (true == true))
}


