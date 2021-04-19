<?php
/**
 * 
 * Encapsulation => Data Hiding 
 * Abstraction => Implementation Hiding
 * Inheritance 
 * Poly morphism    add(string x , string y) : string __call 
 *                 add(float x , flaot y) : float
 *                  area() => rect area
 *                  area() => circle area
 */
class Employee{
    // Data Members / Fields / Attributes => Variables
    private int $empId;
    private string $empName;
    private float $empSalary;
    private bool $isMale;

    public function __construct(int $empId , string $empName ,string $empSalary ,bool $isMale){
        $this->empId = $empId;
        $this->empName= $empName;
        $this->empSalary = $empSalary;
        $this->isMale = $isMale;
    }
    // Getter And Setter
    public function setEmployeeData(int $empId , string $empName ,string $empSalary ,bool $isMale):void{
        $this->empId = $empId;
        $this->empName= $empName;
        $this->empSalary = $empSalary;
        $this->isMale = $isMale;
    }

    public function getEmployeeId() : int{
        return $this->empId;
    }
    public function getEmployeeName():string{
        return $this->empName;
    }
    public function getEmployeeSalary():float{
        return $this->empSalary;
    }
    public function getGender(): bool{
        return $this->isMale;
    }
    
    // Actions => Methods => Functions
    public function PrintInfo() :string{
      return "Employee Id is " . $this->empId . "Employee Name Is " . $this->empName . "Employee Salary is " . $this->empSalary;
    }
}

$emp = new Employee(1 , "Omar" , 8000 , true);
echo $emp->PrintInfo();
echo "<br> ================= <br>" . $emp->getEmployeeSalary();
$emp2 = new Employee(2 , "Ayman" , 5000 , true);
echo "<br>" . $emp2->PrintInfo();
/**
 * public Employee(){
 *      
 * }
 * 
 * __construct(){}
 * constructor(){}
 * __init__(){}
 * 
 * void greeting(){
 *  console.Write("");
 * }
 * int sum(int x , int y){
 *  return 
 * }
 * 
 * Employee(){
 * }
 */