<!DOCTYPE html>
  <html>
    <head lang="pt-br">
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="style/sass/materialize.css"  media="screen,projection"/>
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
      <meta charset=”UTF-8”>
      <title>Seu Titulo</title>
      <script type="text/javascript" src=" https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body>
      <script>
$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});        </script>


      <!-- Informations Payment -->
      <div class="row">
      <div class="container">
       <!-- price card -->
      <div style="padding-top:4rem" class="col s12 l4 m4 xl4 right">
        <div class="card">
        <div class="card-image">
          <img class="activator"  src="https://ichef.bbci.co.uk/news/660/cpsprodpb/CE92/production/_103928825_gettyimages-476383777.jpg">
          <a style="background:#35596A !important" class="btn-floating halfway-fab waves-effect waves-light blue activator"><i class="material-icons">contact_support</i></a>
        </div>
        <div class="card-content">
          <span id="valor" style="margin-bottom:0rem !important;font-weight:500" class="card-title"></span>
          <p style="color:#999" id="parcela_ate"></p><br>
          <p class="dark-text" style="paddin-bottom:0.8rem;">Proin eget tortor risus.<br>
          </p>
        </div>
        <div class="card-content">
           
          <img style="margin-left:15%" width="70%" src="https://www.cielo.com.br/assets/images/mobile/ecommerce/img-bandeiras.png"/>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i><b>Sobre</b></span>
          <p>Informações</p>
          <p>Informações.</p>
        </div>
        </div>
      </div>
      <!-- price card -->
      <form id="form_action" action="action/action.php" method="POST">
        <div style="padding-top:4rem" class="col s12 m8 l8 xl8">
          <ul id="tabs-swipe-demo" class="tabs">
            <li class="tab col s3 m4 l4 xl4"><a class="active" href="#personal-info"><i style="padding-top:0.8rem" class="material-icons left">looks_one</i>Informações</a></li>
            <li id="tabs2" class="tab disabled col s3 m4 l4 xl4 "><a href="#payment-info"><i style="padding-top:0.8rem" class="material-icons left">looks_two</i>Pagamento</a></li>
            <li id="tabs3" class="tab  disabled col s3 m4 l4 xl4 "><a href="#confirm-data"><i style="padding-top:0.8rem" class="material-icons left">looks_3</i>Confirmação</a></li>
          </ul>
        </div>
        <!-- tabs datas -->
        <!-- Personal Infos -->
        <div style="padding-top:2rem" id="personal-info" class="col s12 l8 m8 xl8">
          <div class="col s12 l12 m12 xl12">
            <div class="input-field col s12">
            
              <input name="nome_cliente" id="nome_cliente" type="text" class="validate" required="required">
              <label for="nome_cliente" data-error="NOME INCORRETO" data-success="">Nome Completo:</label>
            </div>
            <div class="input-field col s8">
              <input name="email" id="email" type="email" class="validate" required="required">
              <label for="email" data-error="E-MAIL INVÁLIDO" data-success="">E-mail:</label>
            </div>
            <div class="input-field col s4">
              <input name="phone" id="phone" type="tel" class="validate" required="required" data-length="14">
              <label for="phone" data-error="TELEFONE INCORRETO" data-success="">Telefone:</label>
            </div>
            <div class="input-field col s12">
              <input name="doc" id="doc" type="text" class="validate" required="required" data-length="14">
              <label for="doc" data-error="DOCUMENTO INVÁLIDO" data-success="">CPF:</label>
            </div>
            <div class="input-field col s12">
              <input name="cep" id="cep" type="text" class="validate" onblur="pesquisacep(this.value);" required="required" size="10" maxlength="9">
              <label for="cep" data-error="Cep Municipio" data-success="">CEP:</label>  
            </div>
            <!-- confirm endereço -->
            <div id="modal1" class="modal modal-fixed-footer">
              <div class="modal-content">
                <h5 class="center">Confirme seu endereço:</h5>
            <div class="input-field col s12 l8 m8 xl8">
              <input name="rua" id="rua" type="text" class="validate" required="required" placeholder="Endereço:">  
            </div>
            <div class="input-field col s12 l4 m4 xl4">
              <input name="num" id="num" type="text" class="validate" required="required" placeholder="N°:">  
            </div>
            <div class="input-field col s12 m4 l4 xl4">
              <input name="bairro" id="bairro" type="text" class="validate" required="required" placeholder="Bairro:"> 
            </div>
            <div class="input-field col s12 m4 l4 xl4">
              <input name="cidade" id="cidade" type="text" class="validate" required="required" placeholder="Cidade:">
            </div>
            <div class="input-field col s12 m4 l4 xl4">
              <input name="uf" id="uf" type="text" class="validate" required="required" placeholder="UF:">
            </div>
            <div class="input-field col s12 m12 l12 xl12">
              <input name="complemento" id="complemento" type="text" class="validate" placeholder="Complemento:">
            </div>
              </div>
              <div class="modal-footer">
                <a href="#" id="btnModal" class="modal-close waves-effect waves-green btn-flat">Confirmar</a>
              </div>
            </div>            
            
            <a id="nextFirst" style="display:none" class="waves-effect waves-light btn right"><i class="material-icons right">navigate_next</i>Próximo</a>
          </div>
        </div>
        <!-- Personal Infos -->
       
        <div id="payment-info" class="col s12 l8 m8 xl8">
        <div class="col s12 l12 m12 xl12">
          <div class="input-field col s12 l12 m12 xl12">
            <input name="name" id="name" maxlength="50" type="text" class="validate" required="required">
            <label for="name" data-error="NOME INCORRETO" data-success="">Nome Impresso No Cartão:</label>
          </div>
         <div class="right col s12 l5 m5 xl5">
            <br>
            <center>
            <img style="width:2.5rem;opacity:0.4" id="amex" src="style/images/credit_card/Bandeiras/grey/americanexpress.png"/>
            <img style="width:2.5rem;opacity:0.4" id="diners" src="style/images/credit_card/Bandeiras/grey/diners.png"/>
            <img style="width:2.5rem;opacity:0.4" id="elo" src="style/images/credit_card/Bandeiras/normal/elo.png"/>
            <img style="width:2.5rem;opacity:0.4" id="hipercard" src="style/images/credit_card/Bandeiras/grey/hipercard.png"/>
            <img style="width:2.5rem;opacity:0.4" id="jcb" src="style/images/credit_card/Bandeiras/grey/jcb.png"/>
            <img style="width:2.5rem;opacity:0.4" id="master" src="style/images/credit_card/Bandeiras/grey/mastercard.png"/>
            <img style="width:2.5rem;opacity:0.4" id="visa" src="style/images/credit_card/Bandeiras/grey/visa.png"/>
            </center>
          </div>
          <div class="input-field col s12 l7 m7 xl7">
            <input name="checkout_card_number" id="checkout_card_number" type="text"  inputmode="numeric" data-length="19" class="input-text form-control" required="required" min="0000000000000001" max="9999999999999999">
            <label for="checkout_card_number" data-error="NÚMERO INVÁLIDO" data-success="">Número Do Cartão:</label>
          </div>
          
          <div class="input-field col s12 l6 m6 xl6">
            <input name="expirationdate" id="expirationdate" type="text" data-length="7" class="validate" required="required">
            <label for="expirationdate" data-error="VALIDADE INVÁLIDA" data-success="">VALIDADE MM/AAAA:</label>
          </div>
          <div class="input-field col s12 l6 m6 xl6">
            <input name="securitycode" id="securitycode" type="text"  data-length="3" inputmode="numeric" class="validate" required="required" min="001" max="9999" >
            <label for="securitycode" data-error="CDC INCORRETO" data-success="">CVV:</label>
          </div>
            <select name="sales" id="sales" style="display:block !important;margin-bottom:2rem">
            </select>
            <a id="secondNext" style="display:none" class="waves-effect waves-light btn right"><i class="material-icons right">navigate_next</i>Próximo</a>
          </div>
        </div>
        <!-- Payment Infos -->
        <!-- Data Confirm -->
        <div id="confirm-data" class="col s12 l8 m8 xl8">

          <div class="col s12 m12 l12 xl12">
          <ul id="tabs-swipe-demo" style="overflow-x: hidden;" class="tabs">
            <li class="tab left col s6 m6 l6 xl6" style="background:#83A7B8;color:#fff;border-right:1px solid #fff"><a style="color:#fff" class="active" href="#infos"><i style="padding-top:0.8rem" class="material-icons left">people</i>Informações Pessoais</a></li>
            <li class="tab right col s6 m6 l6 xl6" style="background:#83A7B8;color:#fff"><a style="color:#fff" href="#end"><i style="padding-top:0.8rem" class="material-icons left">my_location
</i>Endereço</a></li>
          </ul>
        </div>
        <div id="infos" class="col s12 l12 m12 xl12">
          
        <div class="col s12 l12 m12 xl12">
          <a id="teste" style="margin-top:1.5rem" class="btn-floating btn waves-effect waves-light red"><i class="material-icons">mode_edit</i></a>
          <div class="input-field col s11">
            <input name="nome_cliente" id="nome"  type="text" disabled class="validate" required="required">
            <label for="nome" data-error="NOME INCORRETO" data-success=""></label>
          </div>
          <div class="input-field col s12">
            <input name="email" id="email-confirm" type="email" disabled class="validate" required="required">
            <label for="email-confirm" data-error="NOME INCORRETO" data-success=""></label>
          </div>
          <div class="input-field col s12">
            <input name="phone" id="phone-confirm" type="tel" disabled class="validate" required="required">
            <label for="phone-confirm" data-error="NOME INCORRETO" data-success=""></label>
          </div>
          <div class="input-field col s12">
            <input name="doc" id="doc-confirm" type="text" disabled class="validate" required="required">
            <label for="doc-confirm" data-error="NOME INCORRETO" data-success=""></label>
          </div>
          
        </div>
        </div>
        <!-- Endereço -->
        <div id="end" class="col s12 l12 m12 xl12">
        <a id="end2" style="margin-top:1.5rem" class="btn-floating btn waves-effect waves-light red"><i class="material-icons">mode_edit</i></a>
        <div class="input-field col s11">
              <input name="cep" id="cep2" type="text" disabled ="validate" onblur="pesquisacep(this.value);" required="required" size="10" maxlength="9" placeholder="CEP">
            </div>
            <div class="input-field col s12 l8 m8 xl8">
              <input name="rua" id="rua2" type="text" disabled class="validate" required="required" placeholder="Endereço:">  
            </div>
            <div class="input-field col s12 l4 m4 xl4">
              <input name="num" id="num2" type="text" disabled  class="validate" required="required" placeholder="N°:">  
            </div>
            <div class="input-field col s12 m4 l4 xl4">
              <input name="bairro" id="bairro2" type="text" disabled class="validate" required="required" placeholder="Bairro:"> 
            </div>
            <div class="input-field col s12 m4 l4 xl4">
              <input name="cidade" id="cidade2" type="text" disabled class="validate" required="required" placeholder="Cidade:">
            </div>
            <div class="input-field col s12 m4 l4 xl4">
              <input name="uf" id="uf2" type="text" class="validate" disabled required="required" placeholder="UF:">
            </div>
            <div class="input-field col s12 m12 l12 xl12">
              <input name="complemento" id="complemento2" type="text" disabled class="validate" placeholder="Complemento:">
            </div>
        </div>
        <!-- Endereço -->
        <button id="btn" class="btn waves-effect waves-light btn right" type="submit" name="action">Confirmar
            <i class="material-icons right">navigate_next</i>
          </button>
        </div>
        
        <!-- Data Confirm -->
        <!-- tabs datas -->
      </form>
      </div>
      <!-- Footer -->
      <div class="col s12 m12 l12 xl12 center">
        <p style="text-align:center;font-size:12px" class="grey-text">Informações De Segurança</p>
    <img width="100" class="center-align" src="style/images/security.png"/>
      </div>
      <!-- Footer -->
      </div>
      <!--JavaScript at end of body for optimized loading-->
      <script type="text/javascript" src="js/mask/jquery.mask.js"></script>
      <script type="text/javascript" src="js/mask/jquery.mask.min.js"></script>      
      <script type="text/javascript" src="credit.js"></script>
      <script type="text/javascript" src="js/functions/cep.js"></script>
      <script>
        var timer;    
        $("#cep").mask('00000-000');
 
        clearInterval(timer);
        jQuery('#modal1').modal();
        $("#cep").on('input', function (evt){
          var value = evt.target.value
          timer = setTimeout(function() {
                  jQuery('#modal1').modal('open');
            },3000);
        });
        var url_atual = window.location.href;

        window.history.pushState({}, document.title, url_atual);
</script>
      <script type="text/javascript" src="js/bin/materialize.min.js"></script>
</body>
</html>


 
