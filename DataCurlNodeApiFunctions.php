

<?php 

//updated on 12/07/2024
// Constants
define("_W8_", "w8_formdata");



function utf8_converter($array)
{
    array_walk_recursive($array, function(&$item, $key){
        if(!mb_detect_encoding($item, 'utf-8', true)){
                $item = utf8_encode($item);
        }
    });

    return $array;
}


// Function to determine client IP address
function getClientIp() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        return $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        //return $_SERVER['HTTP_X_FORWARDED_FOR'];
        $ip_address = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        $ip_address = trim($ip_address[0]);
        return $ip_address;
    } else {
        return $_SERVER['REMOTE_ADDR'];
    }
}

function dataCurlAPI($tableName, $data) {
 
    $api_url = "https://app-lp.techglobaledgeinfo.in:4007/data/{$tableName}";

    // Initialize cURL session
    $ch = curl_init($api_url);

    // Set cURL options
    curl_setopt_array($ch, array(
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($data),
        CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
    ));
	
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

    // Execute cURL request
    $response = curl_exec($ch);

    // Check for errors
    if ($response === FALSE) {
         return curl_error($ch);
    }

    // Close cURL session
    curl_close($ch);

    // Output the API response
    return  $response;
    }

?>