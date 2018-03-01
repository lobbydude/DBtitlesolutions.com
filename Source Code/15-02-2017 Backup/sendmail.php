<?php
require_once('class_phpmailer.php');
$name = strip_tags($_POST['name']);
$phone = strip_tags($_POST['phone']);
$email = strip_tags($_POST['email']);
$subject = strip_tags($_POST['subject']);
$message = strip_tags($_POST['message']);
$body ="Hello Team, <br><br> Customer Name : $name <br> Contact Number : $phone <br> Customer Email : $email <br> Subject : $subject <br> Message : $message <br>";
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->CharSet = 'UTF-8';
$mail->Host = "smtpout.secureserver.net";
$mail->SMTPAuth = true;
$mail->Port = 465;
$mail->Username = "info@dbtitlesolutions.com";
$mail->Password = "Santander@789";
$mail->SMTPSecure = 'ssl';
$mail->From = "$email";
$mail->FromName = "$name";
$mail->isHTML(true);
$mail->Subject = "Enquiry From DB Title Solutions : $subject";
$mail->Body = "$body";
$mail->addAddress('info@dbtitlesolutions.com');
$mail->SMTPDebug = 1;
$sent = $mail->send();
if (!$sent) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "success";
}
?>