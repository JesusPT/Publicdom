<?php

$user = $_POST['User']
$pass = $_POST['Pass'];
$nPass = $_POST['newPass'];
$email = $_POST['Email'];
session_start();
//$_SESSION ['perfil']['pass']
if($pass == ($_SESSION ['perfil']['pass'])){
  ///Cambio de Nombre de usuario///////===================
  if ($user == null) {//2

  }elseif((preg_match("/^[a-zA-Z0-9|_|#]{3,11}$/", $user))){
      echo 2;
    }/////==================================================
    /////Cambio de password=================================
  if($nPass == null){//3

  }elseif(preg_match ("/^[\w|-]{5,18}$/",$pass){
     echo 3;
   }//////==================================================
   /////Cambio de Email=====================================
  if(email == null){//4

  }elseif (filter_var($Email, FILTER_VALIDATE_EMAIL)) {
     echo 4;
   }///////=================================================
   /////Conexion a base de datos============================
  if (@$enlace = new mysqli("localhost","root","","publidom")) {
    ////Conexion Formulario====================================
    if (@$enlace -> query("call registro('$User','$name $paterno $materno','$Age','$Email','$Pass')")) {
      echo 1;
    }else{
      echo 0;
    }//////====================================================
  }else{
    echo 0;
  }//////==================================================
}/////=======================
?>
