<?php
$ID = $_GET["ID"];
$input = $ID;
$bug1='<';
$bug2='(';
$bug3='{';
$check1=strpos($input,$bug1);
$check2=strpos($input,$bug2);
$check3=strpos($input,$bug3);

if($check1 != false || $check2 != false || $check3!=false){
    echo 'INVALID';
}else{
    $data = file_get_contents("students.json");
    $data_d = json_decode($data);
    if ($ID==NULL){
        echo "Please Enter an ID.";
    }else if($data_d->$ID){
        echo "Hello, {$data_d->$ID}"; # no <h1> tag in comparison with get/post version
    }else{
        echo "{$ID} doesn't exist.";
    }
}
?>
