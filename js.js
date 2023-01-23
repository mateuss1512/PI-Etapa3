function valida() {

    let formValido = true;
    let checkboxC = false;
    let radioC = false;

    var spanNome = document.getElementById("iNome");
    var spanEmail = document.getElementById("iEmail");
    var spanDate = document.getElementById("iDate");
    var spanSexo = document.getElementById("iSex");
    var spanRec = document.getElementById("iOp");

    spanNome.textContent = "";
    spanEmail.textContent = "";
    spanDate.textContent = "";
    spanSexo.textContent = "";
    spanRec.textContent = ""; ''

    var radios = document.getElementsByName('cat');
    var checkboxs = document.getElementsByName('conts');

    for (var i = 0; i < checkboxs.length; i++) {
        if (checkboxs[i].type === 'checkbox' && checkboxs[i].checked) {
            checkboxC = true;
        }
    }

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            radioC = true;
        }
    }

    if (!checkboxC) {
        spanRec.textContent = 'O tipo de contato deve ser informado!'
    }

    if (!radioC) {
        spanSexo.textContent = 'O sexo deve ser informado!'
    }

    function isTipo(nome) {
        var valido = /[A-z]/;
        return valido.test(nome);
    }

    if (nome.value === "" || !isTipo(nome.value)) {
        document.getElementById("nome").focus();
        document.getElementById("nome").style.border = "2px solid #FF0000";
        spanNome.textContent = 'O nome deve ser preenchido!';
        formValido = false;
    }

    if (email.value === "") {
        document.getElementById("email").focus();
        document.getElementById("email").style.border = "2px solid #FF0000";
        spanEmail.textContent = 'O email deve ser informado!';
        formValido = false;
    }

    if (date.value === "") {
        document.getElementById("date").focus();
        document.getElementById("date").style.border = "2px solid #FF0000";
        spanDate.textContent = 'A data deve ser informado!';
        formValido = false;
    }

    if (formValido && radioC && checkboxC) {
        document.getElementById("everything").hidden = true;
        document.getElementById("info").style.display = "block";
        document.getElementById("nomes").textContent = 'Nome: ' + nome.value;
        document.getElementById("emails").textContent = 'Email: ' + email.value;
        document.getElementById("datas").textContent = 'Data ' + date.value;
        let checkboxes = document.querySelectorAll('input[name="conts"]:checked');
        let output = [];
        checkboxes.forEach((checkbox) => {
            output.push(checkbox.value);
        });
        let radioSex = document.querySelectorAll('input[name="cat"]:checked');
        let outputS = [];
        radioSex.forEach((radio) => {
            outputS.push(radio.value);
        });
        document.getElementById("sexos").textContent = 'Sexo: ' + outputS;
        document.getElementById("contatos").textContent = 'Tipo de contato: ' + output; 
    }

}

function alterar() {
    document.getElementById("info").style.display = "none";
    document.getElementById("everything").hidden = false;
    $('.checado').prop('checked', false);
}

function resetar() {
    document.getElementById("info").style.display = "none";
    document.getElementById("everything").hidden = false;
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("date").value = "";
    $('.checado').prop('checked', false);
}