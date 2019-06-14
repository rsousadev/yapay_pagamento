<?php
ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);
session_start();
  if(empty($_SESSION['valor']) == 1){

  }
$nome_cliente = $_POST['nome_cliente'];
$cep = $_POST['cep'];
$rua = $_POST['rua'];
$numer = $_POST['num'];
$bairro = $_POST['bairro'];
$cidade = $_POST['cidade'];
$uf = $_POST['uf'];
$complemento = $_POST['complemento'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$doc = $_POST['doc'];
$name = $_POST['name'];
$valor = $_SESSION['valor'];
$type = $_SESSION['type'];
$checkout_card_number = $_POST['checkout_card_number'];
$expirationdate = $_POST['expirationdate'];
$securitycode = $_POST['securitycode'];
//$sales = 1;
$sales = $_POST['sales'];
$phone_envia = str_replace(' ', '', $phone);
$phone_envia_1 = str_replace(')', '', $phone_envia);
$phone_envia_2 = str_replace('(', '', $phone_envia_1);
$doc_envia = str_replace('.','',$doc);
$doc_envia_1 = str_replace('-','',$doc_envia);
$doc_envia_2 = str_replace('/','',$doc_envia_1);
//echo $cmd;
$nome_cliente = ucwords($nome_cliente);
$nome_envia = str_replace(' ', '', $nome_cliente);
$valor_envia = strval($valor);
$valor_envia = str_replace('.','', $valor);
$month = substr($expirationdate, 0, 2);
$year = substr($expirationdate, 3);
$num = strval($sales);
$card_number = str_replace(' ', '', $checkout_card_number);
$nome_envia =  preg_replace("/[^a-zA-Z0-9-]/", "-", strtr(utf8_decode(trim($nome_envia)), utf8_decode("áàãâéêíóôõúüñçÁÀÃÂÉÊÍÓÔÕÚÜÑÇ"),"aaaaeeiooouuncAAAAEEIOOOUUNC-"));
$nome_envia = strtolower($nome_envia);
function callAPI($method, $url, $data){
    $curl = curl_init();

    switch ($method){
       case "POST":
          curl_setopt($curl, CURLOPT_POST, 1);
          if ($data)
             curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
          break;
       case "PUT":
          curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
          if ($data)
             curl_setopt($curl, CURLOPT_POSTFIELDS, $data);                
          break;
       default:
          if ($data)
             $url = sprintf("%s?%s", $url, http_build_query($data));
    }

    // OPTIONS:
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);

    // EXECUTE:
    $result = curl_exec($curl);
    if(!$result){die("Connection Failure");}
    curl_close($curl);
    return $result;
 }

 $what_is_the_card = substr($checkout_card_number, 0, 4);

if (substr($checkout_card_number, 0, 1) == 4 && substr($checkout_card_number, 0, 4) != 4389 && substr($checkout_card_number, 0, 4) != 4514 && substr($checkout_card_number, 0, 4) != 4576 && substr($checkout_card_number, 0, 4) != 4011) {
     $type_payment = '3';//visa
}else if(substr($checkout_card_number,0, 1) == 5 && substr($checkout_card_number, 0,4) != 5041 && substr($checkout_card_number,0,4) != 5090 && substr($checkout_card_number, 0,4) != 5067){
     $type_payment = '4';//master
}else if(substr($checkout_card_number, 0,4) == 6363  || substr($checkout_card_number, 0,4) == 4389 || substr($checkout_card_number, 0,4) == 5041 || substr($checkout_card_number, 0,4) == 4514 || substr($checkout_card_number, 0,4) == 5090 || substr($checkout_card_number, 0,4) == 3629 || substr($checkout_card_number, 0,4) == 5067 || substr($checkout_card_number, 0,4) == 4576 || substr($checkout_card_number, 0,4) == 4011){
     $type_payment = '16';//elo
}else if(substr($checkout_card_number, 0,2) == 34 || substr($checkout_card_number, 0,2) == 37){
     $type_payment = '5';//Amex
}else if(substr($checkout_card_number, 0,2) == "35"){
     $type_payment = '19';//JCB
}else if(substr($checkout_card_number, 0,2) == "60"){
     $type_payment = '20';//Hipercard
}else{
   header("Location: error.php");
}

 // DADOS DO PEDIDO
 $data["token_account"] = "SEU TOKEN";

 $data["customer"]["contacts"][1]["type_contact"] = "H";
 $data["customer"]["contacts"][1]["number_contact"] = $phone;

 $data["customer"]["addresses"][1]["postal_code"] = strval($cep);
 $data["customer"]["addresses"][1]["street"] = strval($rua);
 $data["customer"]["addresses"][1]["number"] = strval($numer);
 $data["customer"]["addresses"][1]["neighborhood"] = strval($bairro);
 $data["customer"]["addresses"][1]["city"] = strval($cidade);
 $data["customer"]["addresses"][1]["state"] = strval($uf);
 $data["customer"]["addresses"][1]["type_address"] = "B";
 $data["customer"]["addresses"][1]["completion"] = strval($complemento);

 
 $data["customer"]["name"] = $nome_cliente;
 $data["customer"]["cpf"] = $doc;
 $data["customer"]["email"] = $email;

 $data["transaction_product"][1]["description"] = 'Nome Do Produto';
 $data["transaction_product"][1]["quantity"] = "1";
 $data["transaction"][1]["price_discount"] = intval($discount);
 $data["transaction_product"][1]["price_unit"] = $valor;

 $data["payment"]["payment_method_id"] = $type_payment;
 $data["payment"]["card_name"] = $name;
 $data["payment"]["card_number"] = $checkout_card_number;
 $data["payment"]["card_expdate_month"] = $month;
 $data["payment"]["card_expdate_year"] = $year;
 $data["payment"]["card_cvv"] = $securitycode;
 $data["payment"]["split"] = $sales;


 $data_string = json_encode($data);



 $get_data = callAPI('POST', 'https://api.intermediador.sandbox.yapay.com.br/api/v3/transactions/payment', $data_string );
 $return = json_decode($get_data, true);
 $nome = $return["message_response"]['message'];
 echo $get_data;
 $_SESSION['nome'] = $nome;
 if (strval($nome) == 'success') {
     $message_return = $return['data_response']['transaction']['payment']['payment_response'];
     $tid = $return['data_response']['transaction']['payment']['tid'];
     $message_status = $return['data_response']['transaction']['status_name'];
     $_SESSION['tid'] = $tid; 
     $_SESSION['sales'] = $sales; 
     $_SESSION['valor'] = $valor;
     $_SESSION['message_status'] = $message_status;
     $_SESSION['message_return'] = $message_return;
 }
 else{
   $response_error = $return['error_response']['validation_errors'][0]['message_complete'];
   $_SESSION['sales'] = $sales; 
   $_SESSION['valor'] = $valor;
   $_SESSION['nome'] = $nome;
   $message_status = 'erro';
   $_SESSION['response_error'] = $response_error;
   // $response_error;
 }

     header("Location: index.php");
?>
