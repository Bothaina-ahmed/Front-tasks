<?php

    include 'include/Student.php';

    $person1 = new Person(1 , 'Cairo' , 'Mostafa' , true);
    $person1->setPersonInfo(2 , 'Alex' , 'Mohamed' , true);
    $person1->address= "Mansoura";
    echo $person1->getData();
    echo '<br>' . $person1->address;
    
    echo "<br>";
    $person2 = new Person(3 ,'Cairo' ,'Bothaina' , false);
    echo $person2->getData();

    echo "<br>";
    $std = new Student(4 , 'Alex' , 'Ayman' , true , 90);
    echo $std->getData();


