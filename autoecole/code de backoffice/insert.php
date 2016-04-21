<?php
header('Access-Control-Allow-Origin: *');

$servername = "TODO";
$username = "TODO";
$password = "TODO";
$dbname = "TODO";
$port = TODO;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);
// Check connection
if ($conn->connect_error) {
        echo json_encode(array('return' => "KO" ));
    die("Connection failed: " . $conn->connect_error);
}

$nom = $_GET['nom'];
$prenom = $_GET['prenom'];
$adresse = $_GET['adresse'];
$ville = $_GET['ville'];
$code_postal = $_GET['code_postal'];
$tel = $_GET['tel'];
$email = $_GET['email'];
$mdp = $_GET['mdp'] ;
$connu = $_GET['connu'];

$query = "INSERT INTO utilisateur VALUES (NULL, '$nom', '$prenom', '$adresse', '$ville', '$code_postal', '$tel', '$email', '$mdp', NULL)";
$conn->query($query);

$userid = $conn->insert_id;

if(!empty($tel)) {
  $query1 = "INSERT INTO utilisateur_qualite VALUES (NULL, '$userid', 1)";
}
$conn->query($query1);

$query2 = "INSERT INTO utilisateur_connu_par VALUES (NULL, '$userid', '$connu')";
$conn->query($query2);


echo json_encode(array('return' => "OK" ));

$conn->close();
