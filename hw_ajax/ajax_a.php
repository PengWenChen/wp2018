<?php
$ID = $_GET["ID"];
$name = $_GET["name"];
$input = $ID.$name;
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
    if($data_d[$ID]) 
        echo "{$ID} already exists.";
    else if($ID!=NULL&&$name!=NULL)
        $data_d[$ID]=$name;
    else
        echo "Please enter an ID and a name.";
    $data_e=json_encode($data_d);
    file_put_contents("students.json",$data_e);
}
?>