<?php
require 'vendor/autoload.php';

$email = new \SendGrid\Mail\Mail(); 

$email->setSubject("Заявка с сайта");
$email->setFrom($_GET["from"]);
$email->addTo($_GET["to"]);
$email->addContent("text/html", 'Заявка с сайта <br/> Имя:' . $_GET['name'] . 'Номер телефона: ' . $_GET['phone'] . 'Сообщение' . $_GET['comment']);

$sendgrid = new \SendGrid("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");
try {
    $response = $sendgrid->send($email);
    header('Location: http://lucky-cleaning.com.ua/');
    exit;
} catch (Exception $e) {
    echo 'Caught exception: '. $e->getMessage() ."\n";
}