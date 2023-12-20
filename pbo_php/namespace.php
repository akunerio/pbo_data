<?php
namespace Html;
class Table {
    public $title = "";
    public $numRows = 0;
    public function message() {
        echo "<p>Table '{$this->title}' has {$this->numRows} rows.</p>";
    }
}
//$table = new Table();
//$table->title = "My table";
//$table->numRows = 5;
//$table->message();

$table = new \Html\Table(); // instantiating a class from a different namespace
$table->title = "My table";
$table->numRows = 5;
$table->message();