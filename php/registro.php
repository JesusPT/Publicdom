<?php

$name = $_POST['nombre'];//nombre
$AP = $_POST['AP'];//apellido paterno
$AM = $_POST['AM'];//apellido materno
$User = $_POST['User'];//Nombre usuario
$Pass = md5($_POST['Pass']);//contraseña
$Age = $_POST['Age'];//edad del usuario
$Email = $_POST['Email'];//correo electronico

if ($enlace = new mysqli("localhost","root","","publidom")) {
  if ($enlace -> query("call registro('$User','$name.$AP.$AM','$Age','$Email','$Pass')")) {
    echo 1;
  }else{echo 0;}
}else{echo 0;}

?>
