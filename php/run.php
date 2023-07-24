<?php
echo "hello";
require 'vendor/autoload.php';

use App\home;
use App\product;

echo "<br>";
$product = new product();
echo "<br>";
$home = new home();
echo "<br>";
function sum(...$numbers) {
    $result = 0;
    foreach ($numbers as $number) {
        $result += $number;
    }
    return $result;
}

echo sum(1, 2, 3, 4); // Output: 10
echo "<br>";
$firstArray = [1, 2, 3];
$secondArray = [4, 5, 6];

$mergedArray = [...$firstArray, ...$secondArray];

print_r($mergedArray); // Output: Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 [5] => 6 )
echo "<br>";