<?php

function UniqueRandomNumbersWithinRange($min, $max, $quantity) {
  $numbers = range($min, $max);
  shuffle($numbers);
  return json_encode(array_slice($numbers, 0, $quantity));
}

if (isset($_POST['min']) && isset($_POST['max']) && isset($_POST['quantity'])) {
   echo UniqueRandomNumbersWithinRange($_POST['min'], $_POST['max'], $_POST['quantity']);
}

?>
