<?php
/*Number four */

$ceu = array( "Italy"=>"Rome", "Luxembourg"=>"Luxembourg",
"Belgium"=> "Brussels", "Denmark"=>"Copenhagen",
"Finland"=>"Helsinki", "France" => "Paris",
"Slovakia"=>"Bratislava", "Slovenia"=>"Ljubljana",
"Germany" => "Berlin", "Greece" => "Athens",
"Ireland"=>"Dublin", "Netherlands"=>"Amsterdam",
"Portugal"=>"Lisbon", "Spain"=>"Madrid",
"Sweden"=>"Stockholm", "United Kingdom"=>"London",
"Cyprus"=>"Nicosia", "Lithuania"=>"Vilnius",
"Czech Republic"=>"Prague", "Estonia"=>"Tallin",
"Hungary"=>"Budapest", "Latvia"=>"Riga","Malta"=>"Valetta",
"Austria" => "Vienna", "Poland"=>"Warsaw") ;
asort($ceu) ;
foreach($ceu as $country => $capital)
{
echo "The capital of $country is $capital"."\n" ;
}
/*Number five */
$table_no = 5;
$upto = 10;
 
for($i=1; $i<=$upto; ++$i){
  echo "$table_no * $i = ".$table_no * $i ."<br />";
}

/*Number six */
function check_lowercase_string($string) {
    return ($string === strtolower($string));
}

$string = 'Hi! I am a string';
var_dump(check_lowercase_string($string)); // false
var_dump(check_lowercase_string('test')); // true
/*Number seven */
class IsPrime
{       
function check($num)
{
    for ($i = 2; $i < $num; $i++)
    {
        if ($num % $i == 0) 
        {
            echo 'NOT prime';
            return; // that you need
        }               
    }
    echo 'Prime';           
}       
}

$x = new IsPrime();
$x->check(4);
/*Number eight */
$num = 85;
if($num % 2 == 0){
echo "this is even number";

}else{
echo "this is odd number";
}

/*Number nine */
$pharse1 = 'ball';
$pharse2 = 'lbal';
if(is_anagram($pharse1,$pharse2)){
  echo $pharse1 .' & '. $pharse2 . ' are anagram';
}else{
  echo $pharse1 .' & '. $pharse2 . ' not anagram';
}

/*Number ten */
$s = 'welcome';

$length = strlen($s); 
for ($i = 0, $j = $length-1; $i < ($length / 2); $i++, $j--) {
    $t = $s[$i];
    $s[$i] = $s[$j];
    $s[$j] = $t;
}

var_dump($s);
?>

