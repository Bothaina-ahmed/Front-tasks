<?php
class Car{
    // Data Members / Fields / Attributes => Variables
    public int $carModel;
    public string $carName;
    public string $carcolor;

    public function __construct(int $carModel , string $carName ,string $carcolor){
        $this->carModel = $carModel;
        $this->carName= $carName;
        $this->carcolor = $carcolor;
    }
    //setter 
    public function __set($carName , $value):void{
        switch($carName){
            case 'carModel' : $this->carModel = $value;
                break;
            case 'carName': $this->carName= $value;
                break;
            case 'carcolor':$this->carcolor = $value;
                break;
        }
    }
    //getter
    public function __get($carModel) : string{
        switch($carModel){
            case 'carModel' : return $this->carModel;
                break;
        }
    }
    public function getData():string{
        return "car Name is {$this->carName}
                 <br> car Model is {$this->carModel}
                 <br> car color is {$this->carColor}";
    }
}

$car = new Car(2021,"BMW" , "Red");
echo $car->getData();
