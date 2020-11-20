<?php

class File{
    public function saveTask($data)
    {
        $str = implode(',',$data) ."\n";
        $file = fopen("tasks.csv", 'a');
        fwrite($file, $str);
        fclose($file);
    }

    public function getTasks()
    {
        $file = fopen("tasks.csv", "r");
        $tasks = array();
        while (true) {
            $task = fgetcsv($file);
            if ($task == false) {
                break;
            }
            $tasks[] = $task;
        }
        fclose($file);
        echo json_encode($tasks);
    }
}