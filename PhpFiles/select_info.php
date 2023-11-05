<?php
include "../../db_con.php";
$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$nat_id = $obj['nat_id'];


$response = new stdClass();
$all_data = array();


if ($user_id) {

    $sql_select = mysqli_query($con, " ");


    while ($get_rows = mysqli_fetch_object($sql_select)) {



        $all_data[] = $get_rows;
    }



    $response->status = "success";
    $response->message =  $all_data;
} else {

    $response->status = "error";
    $response->message =  "حدث خطأ ما برجاء المحاولة لاحقا";
}
echo json_encode($response);
