<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name   = htmlspecialchars($_POST['name']);
    $phone  = htmlspecialchars($_POST['phone']);
    $email  = htmlspecialchars($_POST['email']);

    $to = "hr@nspiresoft.com"; // put your email
    $subject = "New Demo Booking Request";

    $message = "
    New Demo Request:

    Name: $name
    Phone: $phone
    Email: $email
    ";

    $headers = "From: noreply@nspiresoft.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    mail($to, $subject, $message, $headers);

    echo "success";
}
?>
