// declara um conjunto fake de dados para contatos
var dbfake = {
    "data": [
        {
            "id": 1,
            "nome": "Leanne Graham",
            "email": "Sincere@april.biz",
            "Confirmasenha": "1-770-736-8031",
            "websenha": "hildegard.org"
        },
        {
            "id": 2,
            "nome": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "Confirmasenha": "010-692-6593",
            "websenha": "anastasia.net"
        },
        {
            "id": 3,
            "nome": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "Confirmasenha": "1-463-123-4447",
            "websenha": "ramiro.info"
        },
        {
            "id": 4,
            "nome": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "Confirmasenha": "493-170-9623 x156",
            "websenha": "kale.biz"
        },
        {
            "id": 5,
            "nome": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "Confirmasenha": "(254)954-1289",
            "websenha": "demarco.info"
        },
        {
            "id": 6,
            "nome": "Mrs. Dennis Schulist",
            "email": "Karley_Dach@jasper.info",
            "Confirmasenha": "1-477-935-8478",
            "websenha": "ola.org"
        },
        {
            "id": 7,
            "nome": "Kurtis Weissnat",
            "email": "Telly.Hoeger@billy.biz",
            "Confirmasenha": "210.067.6132",
            "websenha": "elvis.io"
        },
        {
            "id": 8,
            "nome": "Nicholas Runolfsdottir V",
            "email": "Sherwood@rosamond.me",
            "Confirmasenha": "586.493.6943",
            "websenha": "jacynthe.com"
        },
        {
            "id": 9,
            "nome": "Glenna Reichert",
            "email": "Chaim_McDermott@dana.io",
            "Confirmasenha": "(775)976-6794",
            "websenha": "conrad.com"
        },
        {
            "id": 11,
            "nome": "Matheus",
            "email": "matheusfelipeferreiramartins@gmail.com",
            "Confirmasenha": "2605",
            "websenha": "2605"
        }
        
    ]
}

// Caso exista no Local Storage, recupera os dados salvos
var db = JSON.parse(localStorage.getItem('db'));
if (!db) {
    db = dbfake
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array
    let novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email": contato.email,
        "Confirmasenha": contato.Confirmasenha,
        "websenha": contato.websenha
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
        db.data[index].email = contato.email,
        db.data[index].Confirmasenha = contato.Confirmasenha,
        db.data[index].websenha = contato.websenha

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}