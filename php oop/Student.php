<?php

include 'Person.php';

class Student extends Person{
    private float $grade;
    
    public function __construct($id , $name , $address , $isMale , $grade){
        parent::__construct($id , $name , $address , $isMale);
        $this->grade = $grade;
    }

    
}