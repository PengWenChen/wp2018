<?php
$ID = $_GET["ID"];
$name = $_GET["name"];
$data = file_get_contents("students.json");
$data_d = json_decode($data,true);
$data_d[$ID]=$name;
$data_e=json_encode($data_d);
file_put_contents("students.json",$data_e);

?>