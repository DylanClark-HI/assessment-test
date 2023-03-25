<?php 

class Database {
    private $dbh = null;
    private $errorMsg;

    function __construct($un, $pw, $db, $host, $port) {
        try {
            $this->dbh = new PDO("mysql:dbname=$db;host=$host;port=$port;charset=utf8mb4;", "$un", "$pw", array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4"));
            $this->dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            return "Could not connect to the mysql database. Please contact the System Administrator.";
        }
    }

    function __destruct() {
        $this->dbh = null;
    }

    public function fetch($sql, $params = array(), $firstOnly=FALSE) {
        try {
            $stmt = $this->dbh->prepare($sql);

            foreach ($params AS $key => $value)
                $stmt->bindValue($key, $value);

            $stmt->execute();

            if($firstOnly)
                return $stmt->fetch (PDO::FETCH_ASSOC);
            else
                return $stmt->fetchall (PDO::FETCH_ASSOC);

        } catch (PDOException $e) {
            $msg = $e->getMessage();
            $this->errorMsg = $msg;
            return FALSE;
        }
    }

    public function lastErrMsg() {
        return $this->errorMsg;

    }

    /**
     * run method
     *
     * @params $sql
     *         $params = array()
     *
     */
    public function run($sql, $params = array()) {
        try {
            $stmt = $this->dbh->prepare($sql);
            foreach ($params AS $key => $value)
                $stmt->bindValue($key, $value);
            $stmt->execute();
            return $stmt->rowCount();
        }  catch (PDOException $e) {
            $msg = $e->getMessage();
            echo '<h1>DATABASE ERROR: ' . $msg . '</h1>';
            $this->errorMsg = $msg;
            return FALSE;
        }
    }
}