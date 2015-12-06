<?php
//if($_SERVER["REQUEST_METHOD"] == "POST"){  //Comprueba si la solicitud a sido enviada
$name = $_POST['name'];
$paterno = $_POST['AP'];
$materno = $_POST['AM'];//nombre del usuario
//$User = md5($_POST['User']);//usuario
$User = $_POST['User'];
//$Pass = md5($_POST['Pass']);//contraseña
$Pass = $_POST['Pass'];
$Age = $_POST['Age'];//edad del usuario
$Email = $_POST['Email'];//correo electronico

 // Validacion de Formulario
 if (preg_match("/^(([A-Za-z|ÁÉÍÓÚ|áéíóú]{1}[a-z|ñáéíóú]{1,13}[\s]?)){1,5}$/",$name)) {//2
   if (preg_match("/^[A-Za-z|ÁÉÍÓÚ|áéíóú]{1}[a-z|ñáéíóú]*$/",$paterno)) {//3
     if (preg_match("/^[A-Za-z|ÁÉÍÓÚ|áéíóú]{1}[a-z|ñáéíóú]*$/",$materno)) {//4
       if (preg_match("/^[a-zA-Z0-9|_|#]{3,11}$/", $User)) {//5
         if( preg_match ("/^[\w|-]{5,18}$/",$Pass)){//6
           $Pass = md5($_POST['Pass']);
           if(preg_match("/^[\d]{2}$/",$Age)){//7
             if (filter_var($Email, FILTER_VALIDATE_EMAIL)){//8
                  //echo "dentro de email";
               if (@$enlace = new mysqli("mysql.hostinger.mx","u606309797_root","PAO425","u606309797_publi")) {
                  if (existencia($enlace,$User,$Email)) {
                    if (@$enlace -> query("call registro('$User','$name $paterno $materno','$Age','$Email','$Pass')")) {
                      echo 1;
                    }else{
                      echo 01;
                    }
                  }else{
                    echo 9;
                  }

               }else{
                 echo 02;
               }
             } else{
               echo 8;//8;
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


   function existencia($enlace,$User,$Email){
     $consulta = "SELECT idUsuario,nomEmpresa from usuario,empresa where idUsuario = '$User' or eMail= '$Email' or nomEmpresa = '$User' or usuarioEmp = '$User'";
     if ($respuesta = $enlace -> query($consulta)) {
       if ($respuesta -> num_rows > 0) {
         return false;
       }else{
         return true;
       }
     }

   }

?>
