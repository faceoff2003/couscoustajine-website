<!DOCTYPE html>
<html
<head>
<meta charset="utf-8"/>
    <title></title>
</head>
<body>
    
    <h1>Affichage des données issues du formulaire du contact/commande</h1>
    
    <ul>
        <li><?php echo $_POST['nom']; ?></li>
        <li><?php echo $_POST['prenom']; ?></li>
        <li><?php echo $_POST['adresse']; ?></li>
        <li><?php echo $_POST['telephone']; ?></li>
        <li><?php echo $_POST['email']; ?></li>
        <li><?php echo $_POST['commande']; ?></li>
        <li><?php echo $_POST['date']; ?></li>
        
    </ul>

</body>
</html>