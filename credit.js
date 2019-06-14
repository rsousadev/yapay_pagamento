  var nome = document.getElementById("nome_cliente");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var doc = document.getElementById("doc");
  var name = document.getElementById("name");
  var checkout = document.getElementById("checkout_card_number");
  var expirationdate = document.getElementById("expirationdate");
  var securitycode = document.getElementById("securitycode");
  var cep = document.getElementById("cep");
  var rua = document.getElementById("rua");
  var num = document.getElementById("num");
  var bairro = document.getElementById("bairro");
  var cidade = document.getElementById("cidade");
  var uf = document.getElementById("uf");
  var complemento = document.getElementById("complemento");
  $(document).ready(function(){
    $("#btn").click(function(){    
   Swal.fire({
     position: 'center',
     title: '<p>Confirmando seu pagamento</p>',
     html:
       '<img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"/>',
     showConfirmButton: false,
   })
     });
   });
   
  var url_atual = window.location.href;
  var price;
  var pa;
  /* verificando url e setando valor */
 if(url_atual == "127.0.0.1"){
    price = 1000;
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

  /* verificando url e setando valor */

  /*mostrando valor na url*/
  $('#valor').html( price_finish);
  /*mostrando valor na url*/
  /* injetando no select*/

  /* injetando no select*/
/* mask CNPJ */ 
/* mask CNPJ */ 
$(document).ready(function(){
    $(phone).mask('(00) 000000000');
    $(checkout).mask('0000 0000 0000 0000');
    $(expirationdate).mask('00/0000');
    $(securitycode).mask('000');
    $(doc).mask('000.000.000-00');
    $("#phone-confirm").mask('0000');
});

$(document).ready(function() {
  $('input#phone, input#doc, input#checkout_card_number, input#expirationdate, input#securitycode').characterCounter();
});
/* MASK DOC */
data = [nome, email, phone, doc, name, checkout, expirationdate, securitycode, cep, rua, num, bairro, uf, cidade];
/* MASK DOC */
/* liberação de botão do campo */
  $(data).on('input', function (evt){
    var value = evt.target.value
    if (nome.value != '' && email.value != '' && phone.value != '' && doc.value != '' && $(nome).val().length > 12
    && $(phone).val().length >= 13 && $(doc).val().length >= 14 && cep.value != '' &&  rua.value != '' && num.value != '' && bairro.value != '' && uf.value != '' && cidade.value != '') {
      document.getElementById("nextFirst").style.display = "block";
      $("#tabs2").attr('class', 'tab col s3 m4 l4 xl4');
      $("#nome").val(nome.value);
      $("#email-confirm").val(email.value);
      $("#phone-confirm").val(phone.value);
      $("#doc-confirm").val(doc.value);
      $("#cep2").val(cep.value);
      $("#rua2").val(rua.value);
      $("#num2").val(num.value);
      $("#bairro2").val(bairro.value);
      $("#cidade2").val(cidade.value);
      $("#uf2").val(uf.value);
      $("#complemento2").val(complemento.value);
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
      Swal.fire({
        type: 'success',
        title: 'Dados pessoais liberados para edição',
        text: 'Confirme os campos',

      })
    }); 
    $("#end2").click(function(){
      $("#cep2").prop("disabled", false);
      $("#rua2").prop("disabled", false);
      $("#num2").prop("disabled", false);
      $("#bairro2").prop("disabled", false);
      $("#cidade2").prop("disabled", false);
      $("#uf2").prop("disabled", false);
      $("#complemento2").prop("disabled", false);
      Swal.fire({
        type: 'success',
        title: 'Endereço liberado para edição',
        text: 'Confirme os campos',

      })
    }); 

  /* liberação de botão do campo */

  /*inserindo valores nos campos de editar */

  /* inserindo valores nos campos de editar*/

/*animation credit card */
$('#checkout_card_number').keyup(function(){
    var nc = $(this).val();
    var visa = nc.substring(0,1) == "4" && nc.substring(0,4) != "4389" && nc.substring(0,4) != "4514" && nc.substring(0,4) != "4576" && nc.substring(0,4) != "4011";
    if(visa){
        $("#visa").attr("src","style/images/credit_card/Bandeiras/normal/visa.png");
        $('#visa').css("opacity","0.9");
    } 
    else if(nc.substring(0,1) == "5" && nc.substring(0,4) != "5041" && nc.substring(0,4) != "5090" && nc.substring(0,4) != "5067"){
        $("#master").attr("src","style/images/credit_card/Bandeiras/normal/mastercard.png");
        $('#master').css("opacity","0.9");
    } 
    else if(nc.substring(0,3) == "301" || nc.substring(0,3) == "305" || nc.substring(0,2) == "36" || nc.substring(0,2) == "38" && nc.substring(0,4) != "3629"){
      $("#diners").attr("src","style/images/credit_card/Bandeiras/normal/diners.png");
      $('#diners').css("opacity","0.9");
    }
    else if(nc.substring(0,4) == "6363"  || nc.substring(0,4) == "4389" || nc.substring(0,4) == "5041" || nc.substring(0,4) == "4514" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == " 5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "5090" || nc.substring(0,4) == "3629" || nc.substring(0,4) == "5067" || nc.substring(0,4) == "4576" || nc.substring(0,4) == "4011"){
        $("#elo").attr("src","style/images/credit_card/Bandeiras/normal/elo.png");
        $('#elo').css("opacity","0.9");
    }
    else if(nc.substring(0,2) == "34" || nc.substring(0,2) == "37"){
        $("#amex").attr("src","style/images/credit_card/Bandeiras/normal/americanexpress.png");
        $('#amex').css("opacity","0.9");
    }
    else if(nc.substring(0,2) == "35"){
        $("#jcb").attr("src","style/images/credit_card/Bandeiras/normal/jcb.png");
        $('#jcb').css("opacity","0.9");
    }
    else if(nc.substring(0,2) == "60"){
        $("#hipercard").attr("src","style/images/credit_card/Bandeiras/normal/hipercard.png");
        $('#hipercard').css("opacity","0.9");
    }
    else{
        $("#hipercard").attr("src","style/images/credit_card/Bandeiras/grey/hipercard.png");
        $('#hipercard').css("opacity","0.4");  
        $("#jcb").attr("src","style/images/credit_card/Bandeiras/grey/jcb.png");
        $('#jcb').css("opacity","0.4");   
        $("#amex").attr("src","style/images/credit_card/Bandeiras/grey/americanexpress.png");
        $('#amex').css("opacity","0.4");
        $("#elo").attr("src","style/images/credit_card/Bandeiras/normal/elo.png");
        $('#elo').css("opacity","0.4");   
        $("#diners").attr("src","style/images/credit_card/Bandeiras/grey/diners.png");
        $('#diners').css("opacity","0.4");    
        $("#master").attr("src","style/images/credit_card/Bandeiras/grey/mastercard.png");
        $('#master').css("opacity","0.4");  
        $("#visa").attr("src","style/images/credit_card/Bandeiras/grey/visa.png");
        $('#visa').css("opacity","0.4");     
        $('#checkout_card_number').addClass('invalid');  
        document.getElementById("secondNext").style.display = "none";
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

$('#rua').keypress(function(e) {
  var keyCode = (e.keyCode ? e.keyCode : e.which); // Variar a chamada do keyCode de acordo com o ambiente.
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});
$('#bairro').keypress(function(e) {
  var keyCode = (e.keyCode ? e.keyCode : e.which); // Variar a chamada do keyCode de acordo com o ambiente.
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});
$('#cidade').keypress(function(e) {
  var keyCode = (e.keyCode ? e.keyCode : e.which); // Variar a chamada do keyCode de acordo com o ambiente.
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});
$('#uf').keypress(function(e) {
  var keyCode = (e.keyCode ? e.keyCode : e.which); // Variar a chamada do keyCode de acordo com o ambiente.
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});
