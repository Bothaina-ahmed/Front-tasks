<?php

class Person{
    protected string $name;
    protected string $address;
  
    public function __construct(string $name ,string $address){
        $this->name = $name;
        $this->address = $address;
    } 
    public function getName():string{
        return $this->name;
    }
    public function getAddress():string{
        return $this->address;
    }
    public function setAddress(string $address){
     $this->address=$address;
    }
    public function PrintInfo() :string{
        return "persont name is " . $this->name . "person address Is " . $this->address;
      }
}
class Student extends Person{
    protected string $program;
    protected int $year;
    protected int $fee;
    
    public function __construct(string $name,string $address,string $program ,int $year , int $fee ){
        parent::__construct($name , $address);
        $this->program = $program;
        $this->year = $year;
        $this->fee = $fee;
    }  
    public function getprogram():string{
        return $this->program;
    }
    public function setprogram(string $program){
        $this->program=$program;
       }
    public function getyear():int{
        return $this->year;
    }
    public function setyear(int $year){
        $this->year=$year;
       }
    public function getfee():int{
        return $this->fee;
    } 
    public function setfee(int $fee){
        $this->fee=$fee;
       }
       public function PrintInfo() :string{
        return "student program is " . $this->program . "student year Is " 
        . $this->year . "student fee Is " . $this->fee;
      }
}
class Staff extends Person{
    protected string $school;
    protected int $pay;
    public function __construct(string $name,string $address,string $school ,int $pay ){
        parent::__construct($name , $address);
        $this->school = $school;
        $this->pay = $pay;
    } 
    public function getschool():string{
        return $this->school;
    }
    public function setschool(string $school){
        $this->school=$school;
       }
    public function getpay():int{
        return $this->pay;
    }
    public function setyear(int $pay){
        $this->pay=$pay;
       }
       public function PrintInfo() :string{
        return "staff is " . $this->school . "staff pay Is " 
        . $this->pay;
      }
}
$person = new Person("Bothaina", "cairo");
echo $person->PrintInfo() . '<br>';

$student = new Student("Bothaina", "cairo","cs", 2021,1000);
echo $student->PrintInfo() . '<br>';

$staff = new Staff("Bothaina", "cairo","future", 100);
echo $staff->PrintInfo() . '<br>';

