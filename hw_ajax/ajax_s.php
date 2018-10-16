<?php
$ID = $_GET["ID"];
// sleep(2); # pretend to spend some processing time
$data = file_get_contents("students.json");
$data_d = json_decode($data);
echo "Hello, {$data_d->$ID}"; # no <h1> tag in comparison with get/post version
?>
