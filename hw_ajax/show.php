<?php
$data = file_get_contents("students.json");
$data_d = json_decode($data);
foreach($data_d as $id =>$name){
    echo "{$id}:{$name}</br>";
}
?>