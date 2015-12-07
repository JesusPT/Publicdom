<?php
//if($_SERVER["REQUEST_METHOD"] == "POST"){  //Comprueba si la solicitud a sido enviada
$nomEmp = $_POST['nomEmp'];//Nombre de la empresa
$giro = $_POST['giroEmp'];//giro de la empresa
$tel = $_POST['telEmp'];//Telefono
//$User = md5($_POST['User']);//usuario
$dir = $_POST['direccionEmpr'];//Direccion de la empresa
//$Pass = md5($_POST['Pass']);//contraseña
$titular = $_POST['titularEmp'];//titular
$pass = md5($_POST['PassE']);//contraseña
$Email = $_POST['Email'];//correo electronico
$user = $_POST['user'];
$ban = true;
 // Validacion de Formulario
                   //echo "dentro de email";

if (!preg_match("/[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ. ]{6,50}\S/",$nomEmp)) {
  $ban = false;
  echo 2;
  echo ",";
}
if (!preg_match("/[a-zA-Z]*/",$giro)) {
  $ban = false;
  echo 3;
  echo ",";
}
if (!preg_match("/[0-9]{10}/",$tel)) {
  $ban = false;
  echo 4;
  echo ",";
}
if(!preg_match("/[a-zA-Z0-9.,#ñÑáéíóúÁÉÍÓÚ ]{20,50}\S/",$dir)){
  $ban = false;
  echo 5;
  echo ",";
}
if (!preg_match("/^(([A-Za-z|ÁÉÍÓÚ|áéíóú]{1}[a-z|ñáéíóú]{1,13}[\s]?)){1,5}$/",$titular)) {
  $ban = false;
  echo 6;
  echo ",";
}
if (!preg_match("/[a-zA-Z0-9]{6,12}/",$pass)) {
  $ban = false;
  echo 8;
  echo ",";
}
if (!filter_var($Email, FILTER_VALIDATE_EMAIL)) {
  $ban = false;
  echo 9;
  echo ",";
}
if (!preg_match("/^[a-zA-Z0-9|_|#]{3,11}$/",$user)) {
  $ban = false;
  echo 7;
  echo ",";
}

if ($ban) {
  //
  if (@$enlace = new mysqli("mysql.hostinger.mx","u606309797_root","PAO425","u606309797_publi")) {
    if (existencia($enlace,$user,$Email)) {
      $consulta = "INSERT INTO empresa(nomEmpresa, giroEmpresa, domEmpresa, telEmpresa, titular,pass,email,usuarioEmp) VALUES ('$nomEmp','$giro','$dir','$tel','$titular','$pass','$Email','$user')";
      if (@$enlace -> query($consulta)) {
        echo 1;

      }else{
        echo 0;

      }
    }else{
      echo 10;
      echo ",";
    }


  }else{
    echo 0;
    echo ",";
  }
  //

}

function existencia($enlace,$User,$Email){
  $consulta = "SELECT idUsuario,nomEmpresa from usuario,empresa emp where idUsuario = '$User' or emp.email= '$Email' or nomEmpresa = '$User' or usuarioEmp = '$User'";
  if ($respuesta = $enlace -> query($consulta)) {
    if ($respuesta -> num_rows > 0) {
      return false;
    }else{
      return true;
    }
  }

}

?>
