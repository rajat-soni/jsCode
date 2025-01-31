<?php
function getClientIp() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        return $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip_address = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        $ip_address = trim($ip_address[0]);
        return $ip_address;
    } else {
        return $_SERVER['REMOTE_ADDR'];
    }
}

$ip=array("ip"=>getClientIp());

echo json_encode($ip);

?>