<?php

$name = $_POST['name']." ".$_POST['AP']." ".$_POST['AM'];//
$User = $_POST['User'];//Nombre usuario
$Pass = md5($_POST['Pass']);//contraseña
$Age = $_POST['Age'];//edad del usuario
$Email = $_POST['Email'];//correo electronico

if ($enlace = new mysqli("localhost","root","","publidom")) {
  if ($enlace -> query("call registro('$User','$name','$Age','$Email','$Pass')")) {
    echo 1;
  }else{echo 0;}
}else{echo 0;}

?>
