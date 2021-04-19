<?php

class Person{
    protected int $age;
    protected string $name;
    protected int $dateOfBirth;
    

    public function __construct(int $age ,string $name ,int $dateOfBirth){
        $this->age = $age;
        $this->name = $name;
        $this->date = $dateOfBirth;
    }
}
class Student extends Person{
    protected int $date;
    
    public function __construct($age , $name , $dateOfBirth , $date){
        parent::__construct($age , $name , $dateOfBirth);
        $this->date = $date;
    }   
}

class Courses extends Student{
    protected int $date;
    
    public function __construct($age , $name , $dateOfBirth , $date){
        parent::__construct($age , $name , $dateOfBirth);
        $this->date = $date;
    }   
}

class Employee extends Person{
    protected int $dateHiring;
    
    public function __construct($age , $name , $dateOfBirth ,$dateHiring){
        parent::__construct($age , $name , $dateOfBirth);
        $this->dateHiring = $dateHiring;
    }   
}