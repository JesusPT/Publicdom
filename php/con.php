<?php


$con = new mysqli("localhost","root","","publidom");

$consql = "SELECT idUsuario from usuario";

$makeconsul = $con -> query($consql);

$varcon = $makeconsul -> fetch_assoc();

$var_php = "<script> document.write(pruebaDeVariable) </script>";

echo $var_php;

    while ($varcon = $makeconsul -> fetch_assoc()) {

      //foreach ($varcon as $key) {
        //echo $key;
        //echo "\n";
      //}
      echo $varcon['idUsuario'] . " ";
    }

    //echo $varcon['nomUsuario'];



 ?>
