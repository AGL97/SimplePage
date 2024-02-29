
<?php
    include("database.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styleAuthentication.css">
    <link rel="stylesheet" href="styleReset.css">
    <script src="auth.js" defer></script>
    <title>Login</title>
</head>
<body>
    <main>
        <section class="authContainer">
            <h1>Authentication</h1>
            <form action= "<?php htmlspecialchars($_SERVER["PHP_SELF"])?>"  method="post" name="formDatas" class="formDatas" enctype="application/x-www-form-urlencoded" accept-charset="UTF-8">
                <div class="inputsContainers">
                    <label for="inputName">FullName: </label>
                    <input type="text" name="inputName" class="inputName"  placeholder="Juan Pérez Pérez" maxlength="25" minlength="10"required>
                </div>
                <div class="inputsContainers">                
                    <label for="inputEmail">Email: </label>
                    <input type="email" name="inputEmail" class="inputEmail"  placeholder="juan@gmail.com"required>
                </div>
                <div class="inputsContainers">                
                    <label for="inputPassowrd">Password: </label>
                    <input type="password" name="inputPassowrd"
                    class="inputPassowrd" required>
                </div>
                <div class="inputsContainers">                    
                    <input type="submit" class="buttonSubmit" value="Sig in">
                </div>
            </form> 
        </section> 
        <?php
                if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        $username = filter_input(INPUT_POST,"inputName", FILTER_SANITIZE_SPECIAL_CHARS);
                        $email = filter_input(INPUT_POST,"inputEmail", FILTER_SANITIZE_SPECIAL_CHARS);
                        $password = filter_input(INPUT_POST,"inputPassowrd", FILTER_SANITIZE_SPECIAL_CHARS);          
                        
                        $hash = password_hash($password, PASSWORD_DEFAULT);
                        
                        $sql = "INSERT INTO users(name,password,email)
                        VALUES ('$username','$hash','$email')";
                        try
                        {
                            mysqli_query($conn, $sql);
                        }
                        catch (Exception $e)
                        { 
                            $e->getMessage();     
                        }
                }    
            mysqli_close($conn);
        ?> 
    </main>
</body>
</html>
