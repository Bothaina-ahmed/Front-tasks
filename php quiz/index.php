<?php
/* number one */
$a = "madam";

$b =  strrev($a);

    $string_reverse = str_split($b);

    $palin = '';

    foreach($string_reverse as $value){

        $palin.= $value; 
    }

    print $palin;

    if($a == $palin){

        print "<br>Palindrome";

    } else {

        print "<br>Not Palindrome"; 

    }
/* number two */
 function countSpecificChars ($string, $charsOfInterest) {
    $count = 0;
    $len = strlen($string);
    for ($i = 0; $i < $len; $i++) {
        if (in_array($string[$i], $charsOfInterest)) {
            $count++;
        }
    }
    return $count;
}

function countVowels ($string) {
    return countSpecificChars($string, array('a', 'e', 'i', 'o', 'u'));
}

echo countVowels('welcome');



/* number three */

for ($i = 1; $i <= 15; $i++) {
    if ($i % 15 == 0) {
        echo 'FizzBuzz<br>';
    } elseif ($i % 3 == 0) {
        echo 'Fizz<br>';
    } elseif ($i % 5 == 0) {
        echo 'Buzz<br>';
    } else {
        echo $i . '<br>';
    }
}
?>