
<?php

header("Access-Control-Allow-Origin: *"); 

$dbname = "testingdb"; 
$host = "localhost:3307";
$user = "root";
$password="";
$dbname="testingdb";

$con= mysqli_connect($host, $user, $password,$dbname);
$method = $_SERVER['REQUEST_METHOD'];

if (!$con) {
die("Connection failed: " . mysqli_connect_error());
}
if(isset($_POST['submit']))
{
$email = $_POST['email'];
$password = $_POST['password'];

$res = mysqli_query($mysqli,"select* from tbl_signup where email='$email'and password='$password'");
$numRows = mysqli_num_rows($res);
if($numRows  == 1){
echo "You are login Successfully ";
//header("location:my-account.php");   // create my-account.php page for redirection 	
}
else
{
	echo "failed ";
}
}
?>

