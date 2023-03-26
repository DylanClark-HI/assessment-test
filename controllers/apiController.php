<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

/*
$url = $_SERVER['REQUEST_URI'];

$url = str_replace('/?', '?', $url); // remove last / before ? since it will be seen as an empty parameter value
$pos = strpos($url, '?');
if($pos !== false) {
    $query = substr($url, $pos+1);
    $url = substr($url, 0, $pos);
    parse_str($query, $queryParams);
} else
    $query = '';
// Handle favicon.ico
if(strpos($url, '/favicon.ico')!==false) die();
// . can be used in file path traversal - replace with _
$url = str_replace('.', '_', $url);
// Process parts
/dropins/fitproper/xxx/yy
*/

$postVars = file_get_contents('php://input'); // $HTTP_RAW_POST_DATA deprecated
if(empty($postVars) || $postVars[0] !== '{') {
    $post = array();
} else {
    $post = json_decode($postVars, TRUE);
}

// Using actions to call the function we want
//================================
$method = $_SERVER['REQUEST_METHOD'];

if(empty($post['action']) || ($post['action']!=='getAll' && empty($post['params']))) 
    return die('Invalid request');

$action = $post['action'];
$params = $post['params'];

$dir = dirname(__DIR__, 1);
require_once($dir . DIRECTORY_SEPARATOR . 'components' . DIRECTORY_SEPARATOR . 'Router.php');
$router = new Router();

// Database details:
$un = 'root';                       // DB Username
$pw = '';                           // DB Password 
$db = 'portfolio_data';                           // DB Name
$host = 'localhost';                         // Host Name
$port = 3306;                       // Port Number

$result = $router->initDb($un, $pw, $db, $host, $port);
$result = $router->direct($action, $params);


?>