<?php
for ($i = 1; $i <= 100; $i++){
    if($i / 3 == round($i / 3) && $i / 5 == round($i / 5)){
       echo $i . " is FizzBuzz<br />";
    }
    else if($i / 3 == round($i / 3)){
       echo $i . " is Fizz<br />";
    }
    else if($i / 5 == round($i / 5)){
       echo $i . " is Buzz<br />";
    }
    else {
       echo $i."<br />";
    }
 }
?>