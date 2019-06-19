
function init() {
    // Adiciona funções para tratar os eventos 
    $("#btnInsert").click(function () {
        //Verifica se a senha é igual

        let achou;

        achou = 0;
        
        if (!$('#form-contato')[0].checkValidity()) {
            displayMessage("Preencha o formulário corretamente.");
            return;
        }

        else{
        for(i=0; i<db.data.length; i++) {
        if($("#inputNome").val() == db.data[i].nome || $("#inputNome").val() == db.data[i].email ){
         if($("#inputSenha").val() == db.data[i].websenha){
            window.location.href = "Gatherin.html";
            achou = 1;
            break;  
            }
          else{
            alert("Usuário ou senha errados");
            return;
          }  
         }
       }}

       if(achou == 0){
        alert("Usuário ou senha errados");
       }

    });

   
    // Oculta a mensagem de aviso após alguns segundos
    $('#msg').bind("DOMSubtreeModified", function () {
        window.setTimeout(function () {
            $(".alert").fadeTo(500, 0).slideUp(500, function () {
                $(this).remove();
            });
        }, 5000);
    })
}
