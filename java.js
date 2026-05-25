const form = document.querySelector('.needs-validation')

form.addEventListener('submit', function(event){


    const senha = document.getElementById('senha').value
    const confirmarSenha = document.getElementById('confirmarSenha').value


    if(!form.checkValidity()){
        event.preventDefault()
        event.stopPropagation()
    }


    if(senha !== confirmarSenha){
        alert("As senhas não coincidem!")

        event.preventDefault()
        event.stopPropagation()
    }


    form.classList.add('was-validated')

})
