

<?php
include "../../db_con.php";
$json = file_get_contents('php://input');
$obj = json_decode($json, true);




$user_name = $obj['user_name'];
$nat_id = $obj['nat_id'];
$user_diabetes = $obj['user_diabetes'];
$user_lung = $obj['user_lung'];
$user_heart = $obj['user_heart'];
$user_eyelift = $obj['user_eyelift'];
$user_eyeright = $obj['user_eyeright'];
$user_glasses = $obj['user_glasses'];
$user_tall = $obj['user_tall'];
$user_weigh = $obj['user_weigh'];
$user_massive = $obj['user_massive'];
$user_foot = $obj['user_foot'];
$user_knee = $obj['user_knee'];
$user_shoulders = $obj['user_shoulders'];
$user_capacityTestName = $obj['user_capacityTestName'];
$user_capacityRaw = $obj['user_capacityRaw'];
$user_speedTestName = $obj['user_speedTestName'];
$user_speedRaw = $obj['user_speedRaw'];
$user_speedStandard = $obj['user_speedStandard'];
$user_flexTestName = $obj['user_flexTestName'];
$user_flexRaw = $obj['user_flexRaw'];
$user_flexStandard = $obj['user_flexStandard'];
$user_fitTestName = $obj['user_fitTestName'];
$user_fitRaw = $obj['user_fitRaw'];
$user_fitStandard = $obj['user_fitStandard'];


//  $hoppeys = "image1**shlonak**image2"; 
// $user_id = 5 ;
if ($nat_id) {



    $insert_data =  mysqli_query($con, "
    INSERT INTO `users`(`user_name`, `nat_id`, `user_diabetes`, `user_lung`, `user_heart` ,'user_eyelift','user_eyeright', `user_glasses`,`user_tall` , `user_weigh`
    ,`user_massive` , `user_foot`,`user_knee` , `user_shoulders`,`user_capacityTestName` , `user_capacityRaw` , `user_speedTestName`,`user_speedRaw` , `user_speedStandard`,
    `user_flexTestName` , `user_flexRaw`,`user_flexStandard` , `user_fitTestName` , `user_fitRaw` , `user_fitStandard`) VALUES (
        '$user_name','$nat_id','$user_diabetes','$user_lung','$user_heart','$user_dimensions','$user_glasses','$user_tall','$user_weigh',
        '$user_massive','$user_foot','$user_knee','$user_shoulders','$user_capacityTestName','$user_capacityRaw' ,'$user_capacityStandard','$user_speedTestName',
        '$user_speedRaw','$user_flexTestName','$user_flexRaw','$user_flexStandard','$user_fitTestName','$user_fitRaw','$user_fitStandard' 
    )
    ");


    $new_id = mysqli_insert_id($con);

    if ($new_id > 0) {

        $response->status = "success";
        $response->message = "تم الإضافة بنجاح";
    } else {
        $response->status = "error";
        $response->message = "حدث اثناء عملية الاضافة";
    }
} else {
    $response->status = "error";
    $response->message = "حدث خطأ ما برجاء المحاولة لاحقا";
}



echo json_encode($response);
