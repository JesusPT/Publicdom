<?php
//if($_SERVER["REQUEST_METHOD"] == "POST"){  //Comprueba si la solicitud a sido enviada
$name = $_POST['name'];
$paterno = $_POST['AP'];
$materno = $_POST['AM'];//nombre del usuario
$User = $_POST['User'];//usuario
$Pass = md5($_POST['Pass']);//contraseña
$Age = $_POST['Age'];//edad del usuario
$Email = $_POST['Email'];//correo electronico

/*}
  function test_input($data){
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

*/
 // Validacion de Formulario
 if (preg_match("/^[a-zA-Z ]+$/",$_POST['name'])) {//2
   if (preg_match("/^[a-zA-Z ]*$/",$_POST['AP'])) {//3
     if (preg_match("/^[a-zA-Z ]*$/",$_POST['AM'])) {//4
       if (preg_match("/^[a-z\d_]{5,11}$/", $_POST['User'])) {//5
         if( preg_match ("/^[a-zA-Z ]*$/",$_POST['Pass'])){//6
           if(preg_match("/^[\d{2}]$/",$_POST['Age'])){//7
             if (filter_var($_POST['Email'], FILTER_VALIDATE_EMAIL)){//8
                  echo "dentro de email";
               if ($enlace = new mysqli("localhost","root","","publidom")) {
                 if ($enlace -> query("call registro('$User','$name','$Age','$Email','$Pass')")) {
                   echo 1;
                 }else{
                   echo 0;
                 }
               }else{
                 echo 0;
               }
             } else{
               echo "email no valido";//8;
             }
           } else{
             echo 7;
           }
         } else{
           echo 6;
         }
       } else{
         echo 5;
       }
     } else{
         echo 4;
       }
     } else{
       echo 3;
     }
   } else{
     echo 2;
   }
/*
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
}


if ($enlace = new mysqli("localhost","root","","publidom")) {
  if ($enlace -> query("call registro('$User','$name','$Age','$Email','$Pass')")) {
    echo 1;
  }else{echo 0;}
}else{echo 0;}
*/
?>
