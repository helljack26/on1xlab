<?
function checkIsHttp(){
    if($_SERVER['SERVER_NAME'] == 'onixlab.local'){
        $protocol = 'http://';
    }else{
        $protocol = 'https://';
    }

    return $protocol;
}

function removeRootDir(){
    $old = $_GET['name'];
    $getParamTransName = explode('/',$old);

    return $getParamTransName[count($getParamTransName)-1];
}

function replaceDoubleQuote($string) {
	$string = str_replace('"', "'", $string);
	return $string;
}

function show404() {
    include '404.html';
    exit;
}

function getUniqueServices($conn) {
    $query_services = "SELECT * FROM services WHERE position_on_row='3'";
    $get_services = mysqli_query($conn, $query_services);

    $existedNames = [];

    while ($row_services = mysqli_fetch_assoc($get_services)) :
        $services_name = $row_services['service_name'];
        $pathname = $row_services['pathname'];
        $price = $row_services['price'];
        $unique_item = [];
        $unique_item['service_name'] = $services_name;
        $unique_item['pathname'] = $pathname;
        $unique_item['price'] = $price;

        $existedNames[$services_name] = $unique_item;
    endwhile;

    return $existedNames;
}

function addSpaceForThousands($raw_num) {
    $raw_num = str_replace(" ", "", $raw_num);
    $raw_num = intval($raw_num);
    return number_format($raw_num, 0, '.', '<b></b>');
}
?>