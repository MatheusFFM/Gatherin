var comentarios = {
    "comentario": [
        {
            "id": 1,
            "data": "16/05/2019",
            "texto": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            "autor": "Matheus",
        },
        {
            "id": 2,
            "data": "14/05/2019",
            "texto": "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "autor": "Matheus",
         },
        {
            "id": 3,
            "data": "14/05/2019",
            "titulo": "Incredible medieval world",
            "texto": "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
            "autor": "Matheus",
         },
        {
            "id": 4,
            "data": "15/05/2019",
            "titulo": "This is the sakura's year",
            "texto": "sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
            "Imagem": "https://rockcontent.com/blog/wp-content/uploads/2016/08/imagens-gratis-4.jpg",
            "curtidas": 0,
            "coments": 0,
            "autor": "Matheus",
         },
        {
            "id": 5,
            "data": "20/05/2019",
            "titulo": "Naval force is getting stronger!",
            "texto": "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            "Imagem": "https://rockcontent.com/blog/wp-content/uploads/2016/08/imagens-gratis-11.jpg",
            "curtidas": 0,
            "coments": 0,
            "autor": "Matheus",
         },
        
    ]
}

// Caso exista no Local Storage, recupera os dados salvos
var dbpost = JSON.parse(localStorage.getItem('dbpost'));
if (!dbpost) {
    dbpost = post;
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array
    let novoId = dbpost.postagens[dbpost.postagens.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "titulo": contato.titulo,
        "texto": contato.texto,
        "Imagem": contato.Imagem,
        "curtidas": contato.curtidas,
        "coments": contato.coments,
        "autor": contato.autor,
        "data": contato.data,
    };

    // Insere o novo objeto no array
    dbpost.postagens.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('dbpost', JSON.stringify(dbpost));

    setTimeout( function() {
        window.location.href = "Gatherin.html";
      }, 1000 );
      
    document.getElementById("mincontainer").style.display = "none";
    document.getElementById("maxcontainer").style.display = "grid";
    window.scrollTo(0, 0);
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = dbpost.postagens.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
        dbpost.postagens[index].titulo = contato.titulo,
        dbpost.postagens[index].texto = contato.texto,
        dbpost.postagens[index].Imagem = contato.Imagem,
        dbpost.postagens[index].curtidas = contato.curtidas,
        dbpost.postagens[index].coments = contato.coments,
        dbpost.postagens[index].autor = contato.autor,
        dbpost.postagens[index].data = contato.data,
       

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('dbpost', JSON.stringify(dbpost));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    dbpost.postagens = dbpost.postagens.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('dbpost', JSON.stringify(dbpost));
}

function exibeContatoss() {
    // Remove todas as linhas do corpo da tabela
    $("#table-contatos").html("");

    // Popula a tabela com os registros do banco de dados
    for (i = 0; i < dbpost.postagens.length; i++) {
        let contato = dbpost.postagens[i];
        $("#table-contatos").append(`<tr><td scope="row">${contato.id}</td><td>${contato.titulo}</td><td>${contato.texto}</td><td>${contato.Imagem}</td><td>${contato.curtidas}</td></tr>`);
    }
}

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

function inicial() {
    // Adiciona funções para tratar os eventos 
        // Verfica se o formulário está preenchido corretamente


        // Obtem os valores dos campos do formulário
        let campotitulo = $("#inputtitulo").val();
        let campoImagem = $("#inputImagem").val();
        let campotexto = $('#inputtexto').val();
        let campocurtidas = 0;
        let campoautor = $('#inputautor').val();
        let campodata = year + "/" + month + "/" + day                                                                                                                                                                                                                  ;
        let contato = { titulo: campotitulo, Imagem: campoImagem, texto: campotexto, curtidas: campocurtidas, autor: campoautor, data: campodata };

        insertContato(contato);

        // Reexibe os contatos
        exibeContatoss();

        // // Limpa o formulario
        // $("#form-contato")[0].reset();

    // Intercepta o click do botão Alterar
    $("#btnUpdate").click(function () {
        // Obtem os valores dos campos do formulário
        let campoId = $("#inputId").val();
        if (campoId == "") {
            displayMessage("Selecione um contato para ser alterado.");
            return;
        }
        let campotitulo = $("#inputtitulo").val();
        let campoImagem = $("#inputImagem").val();
        let campotexto = $("#inputtexto").val();
        let campocurtidas = $('#inputcurtidas').val();
        let contato = { ntitulo: campotitulo, Imagem: campoImagem, texto: campotexto, curtidas: campocurtidas };

        updateContato(parseInt(campoId), contato);

        // Reexibe os contatos
        exibeContatoss();

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
        exibeContatoss();

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
        $("#inputtitulo").val(linhaContato.childNodes[1].firstChild.nodeValue);
        $("#inputImagem").val(linhaContato.childNodes[2].firstChild.nodeValue);
        $("#inputtexto").val(linhaContato.childNodes[3].firstChild.nodeValue);
        $("#inputcurtidas").val(linhaContato.childNodes[4].firstChild.nodeValue);
    });

    exibeContatoss();
}