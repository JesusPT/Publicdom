<?php
session_start();
$idEmpresa = $_SESSION['perfilEmp']['idEmpresa'];

$nom = $_POST['nomProd'];
$desc = $_POST['descProd'];
$disp = $_POST['disp'];
$prec = $_POST['precioProd'];
if (@$enlace = new mysqli("mysql.hostinger.mx","u606309797_root","PAO425","u606309797_publi")) {
  $consulta = "INSERT INTO producto(nomProducto,descripcion,precioProducto,Disponibilidad,idEmpresa) VALUES('$nom','$desc',$prec,'$disp',$idEmpresa)";
  echo $consulta;
  if ($respuesta = $enlace -> query($consulta)) {
    echo 1;
  }else{
    echo 2;
  }
}else{
  echo 0;
}

 ?>
