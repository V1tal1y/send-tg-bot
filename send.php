<?php

$s1 = $_POST["s1"];
$s2 = $_POST["s2"];
$s3 = $_POST["s3"];
$s4 = $_POST["s4"];
$s5 = $_POST["s5"];
$s6 = $_POST["s6"];
$phone = $_POST["phone"];
$typePhone = $_POST["typephone"]; 

$tg_user = '-71534228283'; // id пользователя, которому отправиться сообщения
$bot_token = '53594705747:AAFsfHBfV-pi3rg9i3b42GZ06xpCArG97MzM'; // токен бота
$newPhone = str_replace(array('(', ')', ' ', '-'), '', $phone);
$text ="
<b>🎯Заявка на квиз Кухни Львов</b>

Звязок по: $typePhone
Номер: $newPhone

Який стиль кухні вам більше подобається?:
$s1

Тип вашої майбутньої кухні?:
$s2

Вкажіть довжину вашої кухні (в метрах): 
$s3

На яку суму ви розраховуєте?
$s4

Коли плануєте замовити кухню?
$s5

Подарунок до кухні: 
$s6
";

 
 
// параметры, которые отправятся в api телеграмм
$params = array(
    'chat_id' => $tg_user, // id получателя сообщения
    'text' => $text, // текст сообщения
    'parse_mode' => 'HTML', // режим отображения сообщения, не обязательный параметр
);
 
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, 'https://api.telegram.org/bot' . $bot_token . '/sendMessage'); // адрес api телеграмм
curl_setopt($curl, CURLOPT_POST, true); // отправка данных методом POST
curl_setopt($curl, CURLOPT_TIMEOUT, 10); // максимальное время выполнения запроса
curl_setopt($curl, CURLOPT_POSTFIELDS, $params); // параметры запроса
$result = curl_exec($curl); // запрос к api
curl_close($curl);
 
// var_dump(json_decode($result));
?>
