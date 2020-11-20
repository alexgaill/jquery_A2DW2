<?php

class Chat{

    public function __construct()
    {
        $this->pdo = new \PDO("mysql:host=localhost:8889;dbname=firstDb", "root", "root");
    }
    public function getMessages()
    {
        $query = $this->pdo->query("SELECT * FROM messages");
        echo json_encode($query->fetchAll(\PDO::FETCH_ASSOC));
    }

    public function postMessage($data)
    {
        $prepare = $this->pdo->prepare("INSERT INTO messages (content) VALUES (:content)");
        $prepare->execute($data);
        echo json_encode("");
    }
}