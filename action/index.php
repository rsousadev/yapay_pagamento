<?php 
session_start();
$nome = $_SESSION['nome'];
if (strval($nome) == 'success') {
    $sales = $_SESSION['sales'];
    $tid = $_SESSION['tid'];
    $valor = $_SESSION['valor'];
    $message_status = $_SESSION['message_status'];
    $message_return = $_SESSION['message_return'];
    $title = 'Concluído';
    if($sales == 0){
        $sales = 1;
     }
    $content = '            
    <div class="card">
    <div class="card-content">
        <p class="center">Cras ultricies ligula sed magna dictum porta.</p>
        <br>
        <p class="center">Cras ultricies ligula sed magna dictum porta.</p>
        <p class="center">Cras ultricies ligula sed magna dictum porta
        <a href="EMAIL@">EMAIL@EMAIL.com.br</a></p>
        <p class="center"><br>LOREM IPSUM</strong></p>
        </div>
    </div>';
    $status = 'Sucesso';
    $color = 'style="background:#35596a !important"';
    $icon = 'href="https://fredericocarvalho.pt/wp-content/uploads/2017/05/sign-check-icon.png"';

    
}else{
    $tid = 'NÃO AUTORIZADO';
    $valor = $_SESSION['valor'];
    $message_return = $_SESSION['response_error'];
    $message_status = 'Erro';
    $sales = $_SESSION['sales'];
    if($sales == 0){
        $sales = 1;
     }
    $title = 'Erro';
    $content = '
    <div class="card">
    <div class="card-content">
        <p class="center">Cras ultricies ligula sed magna dictum porta..
        </p>
        <br>
        <p class="center">Cras ultricies ligula sed magna dictum porta.</p>
        <p class="center">Cras ultricies ligula sed magna dictum porta.</p>

        </div>
    </div>';
    $status = 'ERRO';
    $color = 'style="background:#be5e4b !important"';
    $icon = 'href="https://www.freeiconspng.com/uploads/error-icon-4.png"';
}

?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title><?php echo $title ?></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="../style/sass/materialize.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!--Import materialize.css-->
        <link rel="shortcut icon" <?php echo $icon; ?> type="image/x-icon" />
        <link type="text/css" rel="stylesheet" href="style/sass/materialize.css"  media="screen,projection"/>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="js/functions/animate_credit.js"></script>
    </head>
    <body>
        <div class="container">
        <div class="col s12 l6 m6 xl6">
            <div <?php echo $color ?> class="card">
                <div class="card-content">
                    <img style="width:10rem;margin-left:5rem" src=""/>
                    <p style="float:right;color:#fcf3db;font-size:2.8rem;margin-top:1.7rem;text-transform:uppercase;color:#fff;"><?php echo $status; ?>
                    </p>
                </div>
            </div>
            <div class="card">    
                <div class="card-content">
                <h5 class="center">Valor R$:<strong><?php echo number_format($valor, 2, ',', '.'); ?></strong></h5>
                    <h6 class="center">Dividido em <?php echo $sales; ?> vezes.</h6>
                    <h5 class="center"><strong>Código de transação:</strong></h5>
                    <h6 class="center"><?php echo $tid; ?></h6><br>
                    <h6 class="center">Info <strong><?php echo $message_return; ?></strong></h6>
                </div>
            </div>
                <?php echo $content; ?>
            </div>
        </div>
        </div>
    
</body>
</html>
