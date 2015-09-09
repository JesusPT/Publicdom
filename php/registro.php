<?php

$name = $_POST['name'];
$AP = $_POST['AP'];
$AM = $_POST['AM'];
$User = $_POST['user'];
$Pass = $_POST['pass'];
$rPass = $_POST['rPass'];
$Age = $_POST['Age'];
$Email = $_POST['Email'];

if ($enlace = new sqli(localhost,root,"","publidom")) {
  $consulta = "insert into usuarios() values()";
  if ($enlace -> query("call registro('$User','$name.$AP.$AM','$Age','$Email','$Pass')")) {
    echo 1;
  }else{echo 0;}
}else{echo 0;}

?>
