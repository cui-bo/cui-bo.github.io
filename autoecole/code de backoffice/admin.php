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

$sql = "SELECT * FROM utilisateur";
$result = $conn->query($sql);
$tabReturn = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $tabTmp = array(
          'nom' => $row['nom'],
          'prenom' => $row['prenom'],
          'adresse' => $row['adresse'],
          'ville' => $row['ville'],
          'code_postal' => $row['code_postal'],
          'tel' => $row['tel'],
          'email' => $row['email'],
          'date_inscription' => $row['date_inscription']
        );
        array_push($tabReturn, $tabTmp);
    }

    echo json_encode($tabReturn);
} else {
    echo "0 results";
}
$conn->close();
