<?php
$mensaje1 = $_POST['mensaje1'] ?? '';
$mensaje2 = $_POST['mensaje2'] ?? '';
$mensaje3 = $_POST['mensaje3'] ?? '';
$mensaje4 = $_POST['mensaje4'] ?? '';

$contenido = "Soporte telefónico: $mensaje1\n";
$contenido .= "Correo electrónico: $mensaje2\n";
$contenido .= "Seguimiento de pedidos: $mensaje3\n";
$contenido .= "Devoluciones y rembolsos: $mensaje4\n";
$contenido .= "es un codigo estudiantil no sirve :D la parte en la que vas a recibir algo xd\n";

file_put_contents("mensajes_recibidos.txt", $contenido, FILE_APPEND);

echo '<div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
        <span style="font-size: 48px; text-align: center;">¡nos encargaremos de tus problemas🗿🔪!</span>
      </div>';

?>
