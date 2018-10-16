<?php
$ID = $_GET["ID"];
$data = file_get_contents("students.json");
$data_d = json_decode($data);
// echo "{$data_d->$ID}";
unset($data_d->$ID);
$data_e=json_encode($data_d);
file_put_contents("students.json",$data_e);
?>