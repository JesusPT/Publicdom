<?php
$val = $_GET['idProducto'];

$consql = "SELECT idProducto FROM historiales WHERE  idUsuario = '".$val."';";
$result = mysqli_query($consql);
while ($ver = mysqli_fetch_object($result)) {
  $id = $ver->idProducto;
  $consql2 = "SELECT nomProducto,descripcion,idEmpresa,Disponibilidad,precioProducto FROM producto where idUsuario = '".$id."'; ";
  $result2 = mysqli_query($consql2);
  $ver2 = mysqli_fetch_assoc($result2);
  $producto = $ver2['nomProducto'];
  $desc = $ver2['descripcion'];
  $idemp = $ver2['idEmpresa'];
  $disp = $ver2['Disponibilidad'];
  $precProd = $ver2['precioProducto'];
  echo "Producto: $producto<br/>Descripcion: $desc<br/>Empresa: $idemp<br/>Disponibilidad: $disp<br/>Precio: $precProd<br/>";
}

//echo $val;

 ?>
