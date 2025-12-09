<?php

// Un teste qui fait que certains champs sont obligatoires

if(isset($_POST['nom']) AND isset($_POST['prenom']) AND isset($_POST['telephone']) AND isset($_POST['commande']) AND isset($_POST['email']) AND isset($_POST['adresse']));
{

$message="Ce message a été envoyé via la page contact du site couscoustajine.be

Nom : " . $_POST['nom']." ".$_POST['prenom'] . "
Email : " . $_POST['email']."
Adresse : ".$_POST['adresse']."
Téléphone : ".$_POST['telephone']."
L'heure de la livraison : ".$_POST['date']."
Commande/message : ".$_POST['commande'];

$email = $_POST["email"];



$retour=mail("soulayman@gmail.com", "Commande", $message, 'From: contact@couscoustajine.be' . "\r\n" . 'Reply-To:' . $_POST["email"]);

if($retour)
{
    
    echo "<p> L'émail à été bien envoyé....Vous allez être redirigé dans 3 secondes </p>";

}

}

// Infos de redirection
$delai=3; // Délai en secondes
$url='http://www.couscoustajine.be/index.html'; // Adresse vers laquelle rediriger le visiteur
// Redirection dans x secondes
header('Refresh: '.$delai.';url='.$url);


?>