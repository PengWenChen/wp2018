<?php
$f = $_GET["myfile"];
$data = file_get_contents("students.json");
$data_d = json_decode($data,true);
echo "{$data}"; # no <h1> tag in comparison with get/post version
?>