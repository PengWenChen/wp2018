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
    $data_d = json_decode($data,true);
    $data_d2 = json_decode($data);

    if(!$data_d[$ID] && $ID!=NULL) 
        echo "Can't find {$ID}";   
    if($ID!=NULL)
        unset($data_d2->$ID);
    else 
        echo "Please enter an ID.";

    $data_e=json_encode($data_d2);
    file_put_contents("students.json",$data_e);
}
?>