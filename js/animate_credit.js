  var nome = document.getElementById("nome_cliente");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var doc = document.getElementById("doc");
  var name = document.getElementById("name");
  var checkout = document.getElementById("checkout_card_number");
  var expirationdate = document.getElementById("expirationdate");
  var securitycode = document.getElementById("securitycode");
  var url_atual = window.location.href;
  var price;
  var pa;
  /* verificando url e setando valor */
  if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=c0001"){
    price = 5997;
    pa = price;
    pa2 = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    document.getElementById("sales").style.display = "none";
    $('select').append('<option value="1"><option>');

  }
 if(url_atual == "http://web.checkout.local/checkoutrede/"){
    price = 1245;
    pa = price;
    pa2 = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    var parcelas = []
    for (i = 0; i < 13; i++) {
      parcelas.push(pa / i);
      if(parcelas[i] == parcelas[0]){
      }else{
        $('select').append('<option value="'+i+'">' + i + ' x de ' +  parcelas[i].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) + '<option>');
      }
    }
    $('#parcela_ate').html('ou em 12 x de ' + parcelas[12].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
      }
    
if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=c0015"){
    price = 1245;
    pa = price;
    pa2 = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    var parcelas = []
    for (i = 0; i < 13; i++) {
      parcelas.push(pa / i);
      if(parcelas[i] == parcelas[0]){
      }else{
        $('select').append('<option value="'+i+'">' + i + ' x de ' +  parcelas[i].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) + '<option>');
      }
    }
    $('#parcela_ate').html('ou em 12 x de ' + parcelas[12].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
      }
      if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=c0016"){
    price = 4000;
    pa = price;
    pa2 = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    var parcelas = []
    for (i = 0; i < 13; i++) {
      parcelas.push(pa / i);
      if(parcelas[i] == parcelas[0]){
      }else{
        $('select').append('<option value="'+i+'">' + i + ' x de ' +  parcelas[i].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) + '<option>');
      }
    }
    $('#parcela_ate').html('ou em 12 x de ' + parcelas[12].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
      }
  if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=c0002"){
    price = 5997;
    pa = price;
    pa2 = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    var parcelas = []
    for (i = 0; i < 13; i++) {
      parcelas.push(pa / i);
      if(parcelas[i] == parcelas[0]){
      }else{
        $('select').append('<option value="'+i+'">' + i + ' x de ' +  parcelas[i].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) + '<option>');
      }
    }
    $('#parcela_ate').html('ou em 12 x de ' + parcelas[12].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
      }
  if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=c0003"){
    price = 6600;
    pa = price;
    pa2 = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    var parcelas = []
    for (i = 0; i < 13; i++) {
      parcelas.push(pa / i);
      if(parcelas[i] == parcelas[0]){
      }else{
        $('select').append('<option value="'+i+'">' + i + ' x de ' +  parcelas[i].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) + '<option>');
      }
    }
    $('#parcela_ate').html('ou em 12 x de ' + parcelas[12].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
  }
  if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=c0004"){
    price = 7011.36;
    pa = price;
    pa2 = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    var parcelas = []
    for (i = 0; i < 13; i++) {
      parcelas.push(pa / i);
      if(parcelas[i] == parcelas[0]){
      }else{
        $('select').append('<option value="'+i+'">' + i + ' x de ' +  parcelas[i].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) + '<option>');
      }
    }
    $('#parcela_ate').html('ou em 12 x de ' + parcelas[12].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
  }
  if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=c0005"){
    price = 6430.20;
    pa = price;
    pa2 = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    var parcelas = []
    for (i = 0; i < 13; i++) {
      parcelas.push(pa / i);
      if(parcelas[i] == parcelas[0]){
      }else{
        $('select').append('<option value="'+i+'">' + i + ' x de ' +  parcelas[i].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) + '<option>');
      }
    }
    $('#parcela_ate').html('ou em 12 x de ' + parcelas[12].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
  }
  if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=c0006"){
    price = 6330.84;
    pa = price;
    pa2 = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    var parcelas = []
    for (i = 0; i < 13; i++) {
      parcelas.push(pa / i);
      if(parcelas[i] == parcelas[0]){
      }else{
        $('select').append('<option value="'+i+'">' + i + ' x de ' +  parcelas[i].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) + '<option>');
      }
    }
    $('#parcela_ate').html('ou em 12 x de ' + parcelas[12].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
  }
  if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=c0007"){
    price = 5845.68;
    pa = price;
    pa2 = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    var parcelas = []
    for (i = 0; i < 13; i++) {
      parcelas.push(pa / i);
      if(parcelas[i] == parcelas[0]){
      }else{
        $('select').append('<option value="'+i+'">' + i + ' x de ' +  parcelas[i].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) + '<option>');
      }
    }
    $('#parcela_ate').html('ou em 12 x de ' + parcelas[12].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
  }
  if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=c0008"){
    price = 5559.24;
    pa = price;
    pa2 = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    var parcelas = []
    for (i = 0; i < 13; i++) {
      parcelas.push(pa / i);
      if(parcelas[i] == parcelas[0]){
      }else{
        $('select').append('<option value="'+i+'">' + i + ' x de ' +  parcelas[i].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) + '<option>');
      }
    }
    $('#parcela_ate').html('ou em 12 x de ' + parcelas[12].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
  }
  if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=c0009"){
    price = 5261.16;
    pa = price;
    pa2 = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    var parcelas = []
    for (i = 0; i < 13; i++) {
      parcelas.push(pa / i);
      if(parcelas[i] == parcelas[0]){
      }else{
        $('select').append('<option value="'+i+'">' + i + ' x de ' +  parcelas[i].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) + '<option>');
      }
    }
    $('#parcela_ate').html('ou em 12 x de ' + parcelas[12].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
  }
  if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=c0010"){
    price = 4676.52;
    pa = price;
    pa2 = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    var parcelas = []
    for (i = 0; i < 13; i++) {
      parcelas.push(pa / i);
      if(parcelas[i] == parcelas[0]){
      }else{
        $('select').append('<option value="'+i+'">' + i + ' x de ' +  parcelas[i].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) + '<option>');
      }
    }
    $('#parcela_ate').html('ou em 12 x de ' + parcelas[12].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
  }
  if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=c0011"){
    price = 3507.36;
    pa = price;
    pa2 = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    var parcelas = []
    for (i = 0; i < 13; i++) {
      parcelas.push(pa / i);
      if(parcelas[i] == parcelas[0]){
      }else{
        $('select').append('<option value="'+i+'">' + i + ' x de ' +  parcelas[i].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) + '<option>');
      }
    }
    $('#parcela_ate').html('ou em 12 x de ' + parcelas[12].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
  }
  if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=c0012"){
    price = 3607.48;
    pa = price;
    pa2 = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    var parcelas = []
    for (i = 0; i < 13; i++) {
      parcelas.push(pa / i);
      if(parcelas[i] == parcelas[0]){
      }else{
        $('select').append('<option value="'+i+'">' +i+ ' x de ' +  parcelas[i].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) + '<option>');
      }
    }
    $('#parcela_ate').html('ou em 12 x de ' + parcelas[12].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
  }
  if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=c0013"){
    price = 2492.64;
    pa = price;
    pa2 = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    var parcelas = []
    for (i = 0; i < 13; i++) {
      parcelas.push(pa / i);
      if(parcelas[i] == parcelas[0]){
      }else{
        $('select').append('<option value="'+i+'">' + i + ' x de ' +  parcelas[i].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) + '<option>');
      }
    }
    $('#parcela_ate').html('ou em 12 x de ' + parcelas[12].toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
  }
  
  if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=d0001"){
    price = 500.00;
    pa = price;
    document.getElementById("sales").style.display = "none";
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
}
 if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=d0002"){
    price = 1000.00;
    pa = price;
    document.getElementById("sales").style.display = "none";
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
}
if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=d0003"){
    price = 1245.00;
    pa = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    document.getElementById("sales").style.display = "none";
}
if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=d0004"){
    price = 1500.00;
    pa = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    document.getElementById("sales").style.display = "none";
}
if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=d0005"){
    price = 2000.00;
    pa = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    document.getElementById("sales").style.display = "none";
}
if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=d0006"){
    price = 2500.00;
    pa = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    document.getElementById("sales").style.display = "none";
}
if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=d0007"){
    price = 3000.00;
    pa = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    document.getElementById("sales").style.display = "none";
}
if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=d0008"){
    price = 3500.00;
    pa = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    document.getElementById("sales").style.display = "none";
} 
if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=d0009"){
    price = 4000.00;
    pa = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    document.getElementById("sales").style.display = "none";
}
if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=d0010"){
    price = 4500.00;
    pa = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    document.getElementById("sales").style.display = "none";
} 
if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=d0011"){
    price = 5000.00;
    pa = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    document.getElementById("sales").style.display = "none";
}
if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=d0012"){
    price = 5500.00;
    pa = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    document.getElementById("sales").style.display = "none";
}
if(url_atual == "https://carrinho.sbcopy.com.br/copypro?off=d0013"){
    price = 6000.00;
    pa = price;
    var price_finish = price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
    var i;
    document.getElementById("sales").style.display = "none";
}

  /* verificando url e setando valor */

  /*mostrando valor na url*/
  $('#valor').html( price_finish);
  /*mostrando valor na url*/
  /* injetando no select*/

  /* injetando no select*/
/* mask CNPJ */ 
var options = {
    onKeyPress: function (cpf, ev, el, op) {
        var masks = ['000.000.000-000', '00.000.000/0000-00'];
        $(doc).mask((cpf.length > 14) ? masks[1] : masks[0], op);
    }
}

$(doc).length > 11 ? $(doc).mask('00.000.000/0000-00', options) : $(doc).mask('000.000.000-00#', options);
var options = {
    onKeyPress: function (cpf, ev, el, op) {
        var masks = ['000.000.000-000', '00.000.000/0000-00'];
        $("doc-confirm").mask((cpf.length > 14) ? masks[1] : masks[0], op);
    }
}

$("doc-confirm").length > 11 ? $("doc-confirm").mask('00.000.000/0000-00', options) : $("doc-confirm").mask('000.000.000-00#', options);
/* mask CNPJ */ 
$(document).ready(function(){
    $(phone).mask('(00) 000000000');
    $(checkout).mask('0000 0000 0000 0000');
    $(expirationdate).mask('00/0000');
    $(securitycode).mask('0000');
    $("#phone-confirm").mask('0000');
});
/* MASK DOC */
data = [nome, email, phone, doc, name, checkout, expirationdate, securitycode];
/* MASK DOC */
/* liberação de botão do campo */
  $(data).on('input', function (evt){
    var value = evt.target.value
    if (nome.value != '' && email.value != '' && phone.value != '' && doc.value != '' && $(nome).val().length > 12
    && $(phone).val().length >= 13 && $(doc).val().length >= 14) {
      document.getElementById("nextFirst").style.display = "block";
      $("#tabs2").attr('class', 'tab col s3 m4 l4 xl4');
      $("#nome").val(nome.value);
      $("#email-confirm").val(email.value);
      $("#phone-confirm").val(phone.value);
      $("#doc-confirm").val(doc.value);
      $(document).ready(function() {
        $('ul.tabs').tabs();
        $("#nextFirst").click(function() {
          $('ul.tabs').tabs('select_tab', 'payment-info');
        });
      });
    } else {
      document.getElementById("nextFirst").style.display = "none";
    }
  })
    /* liberação de botão do campo */
    /* liberação de botão do campo */
  $(data).on('input', function (evt){
    var value = evt.target.value
    if (name.value != '' && checkout.value != '' && expirationdate.value != '' && securitycode.value != '' && $(checkout).val().length > 18 && $(expirationdate).val().length > 6 && $(securitycode).val().length >= 3 ) {
      document.getElementById("secondNext").style.display = "block";
      $("#tabs3").attr('class', 'tab col s3 m4 l4 xl4');
      $(document).ready(function() {
        $('ul.tabs').tabs();
        $("#secondNext").click(function() {
          $('ul.tabs').tabs('select_tab', 'confirm-data');
        });
      });
    } else {
      document.getElementById("secondNext").style.display = "none";
    }
  })
  /* liberação de botão do campo */
    /* liberação de botão do campo */
    $("#teste").click(function(){
      $("#nome").prop("disabled", false);
      $("#email-confirm").prop("disabled", false);
      $("#phone-confirm").prop("disabled", false);
      $("#doc-confirm").prop("disabled", false);
      alert("Campos Liberados Para Edição")
    }); 
  /* liberação de botão do campo */

  /*inserindo valores nos campos de editar */

  /* inserindo valores nos campos de editar*/

/*animation credit card */
$('#checkout_card_number').keyup(function(){
    var nc = $(this).val();
    if(nc.substring(0,1) == "4" && nc.substring(0,4) != "4389" && nc.substring(0,4) != "4514" && nc.substring(0,4) != "4576" && nc.substring(0,4) != "4011"){
        $("#visa").attr("src","style/images/credit_card/Bandeiras/normal/visa.png");
        $('#visa').css("opacity","0.9");
    } 
    else{
        $("#visa").attr("src","style/images/credit_card/Bandeiras/grey/visa.png");
        $('#visa').css("opacity","0.4");   
    }
    if(nc.substring(0,1) == "5" && nc.substring(0,4) != "5041" && nc.substring(0,4) != "5090" && nc.substring(0,4) != "5067"){
        $("#master").attr("src","style/images/credit_card/Bandeiras/normal/mastercard.png");
        $('#master').css("opacity","0.9");
    } 
    else{
        $("#master").attr("src","style/images/credit_card/Bandeiras/grey/mastercard.png");
        $('#master').css("opacity","0.4");   
    }
    if(nc.substring(0,3) == "301" || nc.substring(0,3) == "305" || nc.substring(0,2) == "36" || nc.substring(0,2) == "38" && nc.substring(0,4) != "3629"){
        $("#diners").attr("src","style/images/credit_card/Bandeiras/normal/diners.png");
        $('#diners').css("opacity","0.9");
    }
    else{
        $("#diners").attr("src","style/images/credit_card/Bandeiras/grey/diners.png");
        $('#diners').css("opacity","0.4");   
    }
    if(nc.substring(0,4) == "6363"  || nc.substring(0,4) == "4389" || nc.substring(0,4) == "5041" || nc.substring(0,4) == "4514" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == " 5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "3629" || nc.substring(0,4) == "5067" || nc.substring(0,4) == "4576" || nc.substring(0,4) == "4011"){
        $("#elo").attr("src","style/images/credit_card/Bandeiras/normal/elo.png");
        $('#elo').css("opacity","0.9");
    }
    else{
        $("#elo").attr("src","style/images/credit_card/Bandeiras/grey/elo.png");
        $('#elo').css("opacity","0.4");   
    }
    if(nc.substring(0,2) == "34" || nc.substring(0,2) == "37"){
        $("#amex").attr("src","style/images/credit_card/Bandeiras/normal/americanexpress.png");
        $('#amex').css("opacity","0.9");
    }
    else{
        $("#amex").attr("src","style/images/credit_card/Bandeiras/grey/americanexpress.png");
        $('#amex').css("opacity","0.4");   
    }
    if(nc.substring(0,2) == "35"){
        $("#jcb").attr("src","style/images/credit_card/Bandeiras/normal/jcb.png");
        $('#jcb').css("opacity","0.9");
    }
    else{
        $("#jcb").attr("src","style/images/credit_card/Bandeiras/grey/jcb.png");
        $('#jcb').css("opacity","0.4");   
    }
    if(nc.substring(0,2) == "60"){
        $("#hipercard").attr("src","style/images/credit_card/Bandeiras/normal/hipercard.png");
        $('#hipercard').css("opacity","0.9");
    }
    else{
        $("#hipercard").attr("src","style/images/credit_card/Bandeiras/grey/hipercard.png");
        $('#hipercard').css("opacity","0.4");   
    }
});

$('#nome_cliente').keypress(function(e) {
  var keyCode = (e.keyCode ? e.keyCode : e.which); // Variar a chamada do keyCode de acordo com o ambiente.
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});

$('#name').keypress(function(e) {
  var keyCode = (e.keyCode ? e.keyCode : e.which); // Variar a chamada do keyCode de acordo com o ambiente.
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});

