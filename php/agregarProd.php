<?php

$nom = $_POST['nomProd'];
$desc = $_POST['descProd'];
$disp = $_POST['disp'];
$precio = $_POST['precio'];

session_start();
if (@$enlace = new mysqli("mysql.hostinger.mx","u606309797_root","PAO425","u606309797_publi")) {
  $consulta = "INSERT INTO producto(nomProducto,descripcion,precioProducto,Disponibilidad) VALUES('$nom','$desc',$precio,'$disp')";
  if ($respuesta = $enlace -> query($enlace)) {
    echo 1;
  }else{
    echo 2;
  }
}else{
  echo 0;
}

 ?>
