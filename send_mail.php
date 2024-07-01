<?php

try{

  $curl = curl_init();

  $to = $_GET["to"];
  $content = 'Заявка с сайта <br/> <b>Имя:</b>' . $_GET['name'] . '<br/> <b>Номер телефона:</b> ' . $_GET['phone'] . '<br/> <b>Сообщение</b>' . $_GET['comment'];
  $body = [
    "from" => array(
      "email" => "mailtrap@lucky-cleaning.com.ua",
      "name" => "Lucky Cleaning",
    ),
    "to" => [array("email" => $to)],
    "subject" => "Заявка с сайта Lucky Cleaning",
    "html" => $content,
  ];
  
  curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://send.api.mailtrap.io/api/send',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS => json_encode($body),
    CURLOPT_HTTPHEADER => array(
      'Authorization: Bearer cf1811c336fa21652c84f5f0f1d6bf21',
      'Content-Type: application/json'
    ),
  ));
  
  $response = curl_exec($curl);
  
  curl_close($curl);
  header('Location: http://lucky-cleaning.com.ua/');
}catch(Exception $e) {
  echo 'Caught exception: ',  $e->getMessage(), "\n";
}