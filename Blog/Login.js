
function exibeContatos() {
    // Remove todas as linhas do corpo da tabela
    $("#table-contatos").html("");

    // Popula a tabela com os registros do banco de dados
    for (i = 0; i < db.data.length; i++) {
        let contato = db.data[i];
        $("#table-contatos").append(`<tr><td scope="row">${contato.id}</td><td>${contato.nome}</td><td>${contato.email}</td><td>${contato.senha}</td></tr>`);
    }
}

function init() {
    // Adiciona funções para tratar os eventos 
    $("#btnInsert").click(function () {
        //Verifica se a senha é igual

        
        if (!$('#form-contato')[0].checkValidity()) {
            displayMessage("Preencha o formulário corretamente.");
            return;
        }

        else{
        for(i=0; i<db.data.length; i++) {
        if($("#inputNome").val() == db.data[i].nome || $("#inputNome").val() == db.data[i].email ){
         if($("#inputSenha").val() == db.data[i].websenha){
            setTimeout( function() {
                window.location.href = "Gatherin.html";
              }, 1000 );
            break;  
            }
          else{
            displayMessage("Usuário ou senha errados");
            return;
          }  
         }
       }}

     
        

        // Obtem os valores dos campos do formulário
        let campoNome = $("#inputNome").val();
        let campoEmail = $('#inputEmail').val();
        let campoSenha = $('#inputSenha').val();
        let contato = { nome: campoNome, email: campoEmail, websenha: campoSenha };

        insertContato(contato);

        // Reexibe os contatos
        exibeContatos();

        // Limpa o formulario
        $("#form-contato")[0].reset();
    });

    // Intercepta o click do botão Alterar
    $("#btnUpdate").click(function () {
        // Obtem os valores dos campos do formulário
        let campoId = $("#inputId").val();
        if (campoId == "") {
            displayMessage("Selecione um contato para ser alterado.");
            return;
        }
        let campoNome = $("#inputNome").val();
        let campoEmail = $("#inputEmail").val();
        let campoSenha = $('#inputSenha').val();
        let contato = { nome: campoNome, email: campoEmail, websenha: campoSenha };

        updateContato(parseInt(campoId), contato);

        // Reexibe os contatos
        exibeContatos();

        // Limpa o formulario
        $("#form-contato")[0].reset();
    });

    // Intercepta o click do botão Excluir
    $("#btnDelete").click(function () {
        let campoId = $("#inputId").val();
        if (campoId == "") {
            displayMessage("Selecione um contato a ser excluído.");
            return;
        }
        deleteContato(parseInt(campoId));

        // Reexibe os contatos
        exibeContatos();

        // Limpa o formulario
        $("#form-contato")[0].reset();
    });

    // Intercepta o click do botão Listar Contatos
    $("#btnClear").click(function () {
        $("#form-contato")[0].reset();
    });

    // Oculta a mensagem de aviso após alguns segundos
    $('#msg').bind("DOMSubtreeModified", function () {
        window.setTimeout(function () {
            $(".alert").fadeTo(500, 0).slideUp(500, function () {
                $(this).remove();
            });
        }, 5000);
    });

    // Preenche o formulário quando o usuario clicar em uma linha da tabela 
    $("#grid-contatos").on("click", "tr", function () {
        let linhaContato = this;
        $("#inputId").val(linhaContato.childNodes[0].firstChild.nodeValue);
        $("#inputNome").val(linhaContato.childNodes[1].firstChild.nodeValue);
        $("#inputEmail").val(linhaContato.childNodes[3].firstChild.nodeValue);
        $("#inputSenha").val(linhaContato.childNodes[4].firstChild.nodeValue);
    });

    exibeContatos();
}
