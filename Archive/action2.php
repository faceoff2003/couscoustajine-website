<?php

if(isset($_POST['valider']))
{
    
    if(isset($_POST['nom']) AND isset($_POST['prenom']) AND isset($_POST['telephone']) AND isset($_POST['commande']) AND isset($_POST['email']) AND isset($_POST['adresse']))
    {
        
        if(!empty($_POST['nom']) AND !empty($POST['prenom']) AND !empty($_POST['telephone']) AND !empty($_POST['commande']) AND !empty($_POST['email']) AND !empty($_POST['adresse']))
        {
            
            $nom=htmlspecialchars($_POST['nom']);
            $prenom=htmlspecialchars($_POST['prenom']);
            $telephone=htmlspecialchars($_POST['telephone']);
            $commande=htmlspecialchars($_POST['commande']);
            $email=htmlspecialchars($_POST['email']);
            $adresse=htmlspecialchars($_POST['adresse']);
            $date=htmlspecialchars($_POST['date']);
            
            
            echo "<h2> Bonjour <b> $nom </b> votre commande est bien reçu </h2>";
            
        }
        
        
    }
    
}

?>