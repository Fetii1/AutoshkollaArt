<!DOCTYPE html>
<html>

<head>
        <title>Auto-Shkolla ART</title>
        <link rel="stylesheet" type="text/css" href="main.css" />

</head>

<body>

<?php

$emri = $_POST['name'];
$email = $_POST['mail'];
$txt = $_POST['message'];
$send = $_POST['send'];


$to = 'v.saliu@hotmail.com';
$subject = 'Dërguar nga' .$emri. ', '.$email;

mail($to,$subject,$txt);


if (isset($send)) {
    mail($to,$subject ,$mesazhi);
};



?>

</body>
</html>