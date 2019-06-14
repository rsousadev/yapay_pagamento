function limpa_formulário_cep2() {
    //Limpa valores do formulário de cep2.
    document.getElementById('rua2').value=("");
    document.getElementById('bairro2').value=("");
    document.getElementById('cidade2').value=("");
    document.getElementById('uf2').value=("");
    document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua2').value=(conteudo.logradouro);
    document.getElementById('bairro2').value=(conteudo.bairro);
    document.getElementById('cidade2').value=(conteudo.localidade);
    document.getElementById('uf2').value=(conteudo.uf);
    //document.getElementById('ibge').value=(conteudo.ibge);
} //end if.
else {
    //cep2 não Encontrado.
    limpa_formulário_cep2();
    alert("cep2 não encontrado.");
}
}

function pesquisacep2(valor) {

//Nova variável "cep2" somente com dígitos.
var cep2 = valor.replace(/\D/g, '');

//Verifica se campo cep2 possui valor informado.
if (cep2 != "") {

    //Expressão regular para validar o cep2.
    var validacep2 = /^[0-9]{8}$/;

    //Valida o formato do cep2.
    if(validacep2.test(cep2)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua2').value="...";
        document.getElementById('bairro2').value="...";
        document.getElementById('cidade2').value="...";
        document.getElementById('uf2').value="...";
       // document.getElementById('ibge').value="...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep2.com.br/ws/'+ cep2 + '/json/?callback=meu_callback';
   
          
        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep2 é inválido.
        limpa_formulário_cep2();
        alert("Formato de cep2 inválido.");
    }
} //end if.
else {
    //cep2 sem valor, limpa formulário.
    limpa_formulário_cep2();
}
};

