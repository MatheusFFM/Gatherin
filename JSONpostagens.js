var post = {
    "postagens": [
        {
            "id": 1,
            "data": "06/05/2019",
            "titulo": "Do you wanna know wordpress",
            "texto": "What is WordPress? At its core, WordPress is the simplest, most popular way to create your own website or blog. In fact, WordPress powers over 34% of all the websites on the Internet. Yes – more than one in four websites that you visit are likely powered by WordPress. On a slightly more technical level, WordPress is an open-source content management system licensed under GPLv2, which means that anyone can use or modify the WordPress software for free. A content management system is basically a tool that makes it easy to manage important aspects of your website – like content – without needing to know anything about programming. The end result is that WordPress makes building a website accessible to anyone – even people who aren’t developers.",
            "Imagem": "https://www.dreamhost.com/blog/wp-content/uploads/2017/07/wordpress-logo-stacked-rgb.png",
            "curtidas": 0,
            "coments": 2,
            "autor": "Matheus",
            "comentarios": [
                {

                    "data": "16/05/2019",
                    "texto": "Tem na PlayStore?",
                    "autor": "Enzo",
        
                },
                {

                    "data": "19/05/2019",
                    "texto": "i'm pround",
                    "autor": "Matt Mullenweg",
        
                }
                          ]
        },
        {
            "id": 2,
            "data": "14/05/2019",
            "titulo": "Valentine's day",
            "texto": "Valentine's Day, also called Saint Valentine's Day or the Feast of Saint Valentine, is celebrated annually on February 14. It originated as a Western Christian feast day honoring one or two early saints named Valentinus. Valentine's Day is recognized as a significant cultural, religious, and commercial celebration of romance and romantic love in many regions around the world, although it is not a public holiday in any country.",
            "Imagem": "https://i0.wp.com/www.emotioncard.com.br/wp-content/uploads/2017/07/previsoes-2016-horoscopo-amor-1.jpg?fit=630%2C350&ssl=1",
            "curtidas": 0,
            "coments": 3,
            "autor": "RafaelSan",
            "comentarios": [
                {

                    "data": "16/05/2019",
                    "texto": "I love you, @julia125",
                    "autor": "Jack",
        
                },
                {

                    "data": "17/05/2019",
                    "texto": "I love you, @RafaelSan",
                    "autor": "julia125",
        
                },
                {

                    "data": "19/05/2019",
                    "texto": ":(",
                    "autor": "Jack",
        
                }
                          ]
         },
        {
            "id": 3,
            "data": "14/05/2019",
            "titulo": "Incredible medieval world",
            "texto": "In the history of Europe, the Middle Ages (or medieval period) lasted from the 5th to the 15th century. It began with the fall of the Western Roman Empire and merged into the Renaissance and the Age of Discovery. The Middle Ages is the middle period of the three traditional divisions of Western history: classical antiquity, the medieval period, and the modern period. The medieval period is itself subdivided into the Early, High, and Late Middle Ages.",
            "Imagem": "https://1h4hfe10xz8m3g3xkh2wb9lc-wpengine.netdna-ssl.com/blog/files/2015/08/pixabay-imagem.jpg",
            "curtidas": 0,
            "coments": 1,
            "autor": "Arthur III",
            "comentarios": [
                {

                    "data": "17/05/2019",
                    "texto": "This image literally makes zero sense",
                    "autor": "Fiscal",
        
                }
                          ]
         },
        {
            "id": 4,
            "data": "15/05/2019",
            "titulo": "This is the sakura's year",
            "texto": "A cherry blossom is a flower of several trees of genus Prunus, particularly the Japanese cherry, Prunus serrulata, which is called sakura after the Japanese (桜 or 櫻; さくら). Currently they are widely distributed, especially in the temperate zone of the Northern Hemisphere including Japan, Taiwan, Korea, Mainland China, Nepal, India, Pakistan, Afghanistan, Iran, Myanmar, Thailand and West Siberia. Along with the chrysanthemum[citation needed], the cherry blossom is considered the national flower of Japan. All varieties of cherry blossom trees produce small, unpalatable fruit or edible cherries. Edible cherries generally come from cultivars of the related species Prunus avium and Prunus cerasus.",
            "Imagem": "https://rockcontent.com/blog/wp-content/uploads/2016/08/imagens-gratis-4.jpg",
            "curtidas": 0,
            "coments": 1,
            "autor": "ジョアン",
            "comentarios": [
                {

                    "data": "16/05/2019",
                    "texto": "Beautiful! ",
                    "autor": "Naruto",
        
                }
                          ]
         },
        {
            "id": 5,
            "data": "20/05/2019",
            "titulo": "Naval force is getting stronger!",
            "texto": "The United States Navy is hands down the best and most powerful navy in the world. It eclipses all the other navies in the world by an almost comical margin. It has over 300,000 active personnel with another 100,000 in reserve. Most notably, the United States Navy can deploy over 3,700 aircrafts, which is a totally insane number. The list of commissioned ships of the United States Navy includes 11 aircraft carriers, 9 amphibious assault ships, 2 amphibious command ships, 11 amphibious transport docks, 52 attack submarines, 14 ballistic missile submarines, 4 guided missile submarines, 1 classic frigate, 22 cruisers, 65 destroyers, 12 dock landing ships, 1 expeditionary mobile base, 10 littoral combat ships, 11 mine countermeasures ships, 13 patrol boats, and 2 submarine tenders. Technically, the USS Pueblo, a technical research ship, is still in commission. However, it is currently held captive by North Korea, which attacked and captured the ship for allegedly entering North Korean territory in 1968. The US is easily the top country with the best navy force in the world. And it will most likely remain at the top for the foreseeable future, based on how much the US government spends on military equipment.",
            "Imagem": "https://rockcontent.com/blog/wp-content/uploads/2016/08/imagens-gratis-11.jpg",
            "curtidas": 0,
            "coments": 1,
            "autor": "George Harry",
            "comentarios": [
                {
                    "data": "27/05/2019",
                    "texto": "Brasil não está nem no top10",
                    "autor": "Brasileiro",
                }
                          ]
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
    let comentPadrao = {};

    let novoContato = {
        "id": novoId,
        "titulo": contato.titulo,
        "texto": contato.texto,
        "Imagem": contato.Imagem,
        "curtidas": contato.curtidas,
        "coments": contato.coments,
        "autor": contato.autor,
        "data": contato.data,
        "comentarios": contato.comentarios,
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
        dbpost.postagens[index].comentarios = contato.comentarios,
       

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('dbpost', JSON.stringify(dbpost));
}


var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

function addpost() {

        if ( $("#inputtitulo").val() == "") {
            alert("Preencha o título");
            return;
        }

        if ( $("#inputImagem").val() == "") {
            alert("Imagem não encontrada");
            return;
        }

        if ( $("#inputtexto").val() == "") {
            alert("Preencha o texto do formulário");
            return;
        }

        if ( $("#inputautor").val() == "") {
            alert("Preencha o nome do autor");
            return;
        }

        // Obtem os valores dos campos do formulário
        let campotitulo = $("#inputtitulo").val();
        let campoImagem = $("#inputImagem").val();
        let campotexto = $('#inputtexto').val();
        let campocurtidas = 0;
        let campocoments = 0;
        let campoautor = $('#inputautor').val();
        let campodata = day + "/" + month + "/" + year;
        let campocomentdata = day + "/" + month + "/" + year;
        let campocomenttext = 'Mensagem automática';
        let campocomentnome = 'bot';     
        let campocomentario = [
            {
                "data": campocomentdata,
                "texto": campocomenttext,
                "autor": campocomentnome,
            }
                      ];                                                                                                                                                                                                           
        let contato = { titulo: campotitulo, coments: campocoments, Imagem: campoImagem, texto: campotexto, curtidas: campocurtidas, autor: campoautor, data: campodata, comentdata: campocomentdata, comenttext: campocomenttext, comentnome: campocomentnome, comentarios: campocomentario };

        if ($("#inputtexto").val() != ""){
            insertContato(contato);
            postado();
        }

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

        // Limpa o formulario
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

}