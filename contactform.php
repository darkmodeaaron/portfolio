<?php

if (isset($_POST['submit'])) {
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "roberts.am@outlook.com";
    $headers = "From: ".$mailForm;
    $txt = "You have recieved an email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
    
}