function sendMail (){
    let params = {
        name: document.getElementById("nomeSocial").value,
        email: document.getElementById("email").value
    }

    const serviceID = "service_ujo4mef";
    const templateID = "template_npcyyjq";

    emailjs.send(serviceID, templateID, params)
        .then(() => { // quando dá certo
            document.getElementById("nomeSocial").value = ""; // usando para limpar os valores quando o formulário for enviado
            document.getElementById("nascimento").value = "";
            document.getElementById("genero").value = "";
            document.getElementById("cpf"). value = "";
            document.getElementById("cep"). value = "";
            document.getElementById("uf"). value = "";
            document.getElementById("btnCidade"). value = "";
            document.getElementById("bairro"). value = "";
            document.getElementById("endereco"). value = "";
            document.getElementById("numeroEndereco"). value = "";
            document.getElementById("complemento"). value = "";
            document.getElementById("tel"). value = "";
            document.getElementById("email"). value = "";
            document.getElementById("raca"). value = "";
            document.getElementById("FORMACAO"). value = "";
            document.getElementById("tecnologia1"). value = "";
            document.getElementById("tecnologia2"). value = "";
            document.getElementById("tecnologia3"). value = "";
            document.getElementById("tecnologia4"). value = "";
            document.getElementById("tecnologia5"). value = "";
            document.getElementById("tecnologia6"). value = "";
            document.getElementById("tecnologia7"). value = "";
            document.getElementById("tecnologia8"). value = "";
            document.getElementById("tecnologia9"). value = "";
            document.getElementById("tecnologia10"). value = "";
            document.getElementById("lbAcordo"). value = "";
            console.log("E-mail enviado com sucesso!");
        })
        .catch(() => {
            console.log("Houve um erro inesperado, tente novamente mais tarde!");
        })
}




