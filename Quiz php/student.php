<?php
class Student{
    // Data Members / Fields / Attributes => Variables
    public int $stugrade;
    public string $stuName;
    public string $stuaddress;

    public function __construct(int $stugrade , string $stuName ,string $stuaddress){
        $this->stugrade = $stugrade;
        $this->stuName= $stuName;
        $this->stuaddress = $stuaddress;
    }
    // Getter And Setter
    public function setStudentData(int $stugrade , string $stuName ,string $stuaddress):void{
        $this->stugrade = $stugrade;
        $this->stuName= $stuName;
        $this->stuaddress = $stuaddress;
    }
    public function Appreciation() :string{
        return "very good". $this->stugrade >80;
        return "pass". $this->stugrade >60;
        return "fail". $this->stugrade <50;
    }
    // Actions => Methods => Functions
    public function PrintInfo() :string{
      return "student grade is " . $this->stugrade . "student Name Is " . $this->stuName . "student address is " . $this->stuaddress;
      return "Appreciation".$this->Appreciation(); 
    }
}

$stu = new Student(90,"Bothaina" , "Cairo");
echo $stu->PrintInfo();
