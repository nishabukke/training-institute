<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name        = htmlspecialchars($_POST['name']);
    $email       = htmlspecialchars($_POST['email']);
    $phone       = htmlspecialchars($_POST['phone']);
    $graduation  = htmlspecialchars($_POST['graduation']);

    $to = "hr@nspiresoft.com"; // put your email here
    $subject = "New Enrollment Form Submission";

    $message = "
    New Enrollment Details:

    Name: $name
    Email: $email
    Phone: $phone
    Graduation: $graduation
    ";

    $headers = "From: noreply@nspiresoft.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if(mail($to, $subject, $message, $headers)){
        echo "success";
    } else {
        echo "error";
    }
}
?>
