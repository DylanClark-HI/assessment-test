<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

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


$postVars = file_get_contents('php://input'); // $HTTP_RAW_POST_DATA deprecated
        if(empty($postVars) || $postVars[0] !== '{')
            $post = array();
        else
            $post = json_decode($postVars, TRUE);

// Using actions to call the function we want
//================================
$method = $_SERVER['REQUEST_METHOD'];

$action = $post['action'];
$params = $post['params'];

if(!empty($post) && !empty($post['action'])) {
    switch ($action) {
        case 'getAll':
            echo getArticleList();
            break;
        case 'getArticle':
            echo getFullArticle($params);
            break;
        case 'updateArticle':
            echo updateArticle($params);
            break;
        case 'deleteArticle':
            echo deleteArticle($params);
            break;
        case 'createArticle':
            echo addArticle($params);
            break;
        default:
            echo response("Invalid API request");
    }
}


 function getArticleList(){ 
    $sql = "SELECT * FROM `article`";
    $result = dbHandler($sql);
    echo $result;
}

 function getFullArticle($params){
    $id = $params['id'];

    $sql = "SELECT * FROM `article` WHERE id = $id";
    $result = dbHandler($sql);
    echo $result;
}

function deleteArticle($params){
    $id = $params['id'];

    $sql = "DELETE FROM `article` WHERE id = $id";
    $result = dbHandler($sql);
    echo $result;
}

function updateArticle($params){
    $id = $params['id'];
    $title = $params['title'];
    $body = $params['body'];

    $sql = "UPDATE `article` SET title = '$title', body = " . $body . " WHERE id = $id";
    $result = dbHandler($sql);
    echo $result;
}

function addArticle($params){
    $title = $params['title'];
    $body = $params['body'];

    $sql = "INSERT INTO `article` (title, body) VALUES ('$title', '$body')";
    $result = dbHandler($sql);
    echo $result;
}

function response($arr){
    $json_response = json_encode([
        'status' => 'success',
        'data' => $arr
    ]);

    return $json_response;
}

function dbHandler($sql) {
    $mysqli = new mysqli("localhost","root","","portfolio_data");

    // Check connection
    if ($mysqli -> connect_errno) {
        echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
        exit();
    }

    if ($result = $mysqli -> query($sql)) {
        $arr = array();
        $recordCount = 0;
        $rowCount = $result -> num_rows;
        while($rowCount > 0) {
            $row = $result -> fetch_assoc();
            $recordCount = array_push($arr, $row);
            $rowCount--;
        }
        $res = response($arr);
        

        $result -> free_result();
        $mysqli -> close();

        return $res;
    }
    return true;
}
?>