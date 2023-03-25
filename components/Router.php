<?php


class Router {

    private $db = null;

    public function initDb($un, $pw, $db, $host, $port) {
        require_once(__DIR__ . DIRECTORY_SEPARATOR . 'Database.php');
        $this->db = new Database($un, $pw, $db, $host, $port);
    }

    public function direct($action, $params){
        switch ($action) {
            case 'getAll':
                $result = $this->getArticleList();
                break;
            case 'getArticle':
                $result = $this->getFullArticle($params);
                break;
            case 'updateArticle':
                $result = $this->updateArticle($params);
                break;
            case 'deleteArticle':
                $result = $this->deleteArticle($params);
                break;
            case 'createArticle':
                $result = $this->addArticle($params);
                break;
            default: 
                $result = false;
        }

        if($result === false)
             echo $this->response("Invalid Request.", 'failed');

        return true;
    }


    private function getArticleList(){ 
        $sql = "SELECT * FROM `article`";
        $result = $this->db->fetch($sql);

        if($result === false) 
            return false;

        echo $this->response($result);
    }

    private function getFullArticle($params){
        if(empty($params['id']))
            return false;

        $id = intval($params['id']);

        $sql = "SELECT * FROM `article` WHERE id = :id";
        $result = $this->db->fetch($sql, [':id'=>$id], true);

        if($result === false)
            return false;

        echo $this->response($result);
    }

    private function deleteArticle($params){
        if(empty($params['id']))
            return false;

        $id = intval($params['id']);

        $sql = "DELETE FROM `article` WHERE id = :id";
        $result = $this->db->run($sql, [':id'=>$id]);

        if($result === false)
            return false;

        echo $this->response('Successfully deleted record.');
    }

    private function updateArticle($params){
        if(empty($params['id']))
            return false;

        $id = intval($params['id']);
        $title = $params['title'];
        $body = $params['body'];

        $sql = "UPDATE `article` SET title = :title, body = :body WHERE id = :id";
        $result = $this->db->run($sql, [':id'=>$id, ':title'=>$title, ':body'=>$body]);

        if($result === false)
            return false;

        echo $this->response('Successfully updated Article with ID = ' . $id . '.');
    }

    private function addArticle($params){
        $title = $params['title'];
        $body = $params['body'];

        $sql = "INSERT INTO `article` (title, body) VALUES (:title, :body)";
        $result = $this->db->run($sql, [':title'=>$title, ':body'=>$body]);

        $sql = "SELECT LAST_INSERT_ID() as id";
        $result = $this->db->fetch($sql);

        if($result === false) 
            return false;

        echo $this->response($result);
    }

    public function response($data, $status='success'){
        $json_response = json_encode([
            'status' => $status,
            'data' => $data
        ]);

        return $json_response;
    }
}


?>