<?php
class Square{
    // Data Members / Fields / Attributes => Variables
    public int $side;
    public function __construct(int $side){
        $this->side = $side;
    }
    //setter 
    public function getAreat(int $side){
        $this->side = $side*$side;
    }
    //getter
    public function getPerimeter(int $side){
        $this->side = $side*4;
    }
    public function getData(){
        return "area".$this->getAreat;
      
    }
}

$sqr = new Square(4);
echo $sqr->getData();
?>