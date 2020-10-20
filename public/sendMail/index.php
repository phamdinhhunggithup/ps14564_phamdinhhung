<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/vendor/phpmailer/src/Exception.php';
require_once __DIR__ . '/vendor/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/vendor/phpmailer/src/SMTP.php';
function send_mail($infoReceiver, $subject, $content)
{
    $mail = new PHPMailer(true);
    try {
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = "SMTPSecure";
        $mail->Port = 587;
        $mail->CharSet = "UTF-8";
        $mail->Username = "capri.phamdinhhung@gmail.com";
        $mail->Password = "gnuh20011028pdhcapri";
        $mail->setFrom("capri.phamdinhhung@gmail.com", "aizo.com");
        foreach ($infoReceiver as $infoItem) {
            $mail->addAddress($infoItem['email'], $infoItem['name']);
        }
        $mail->addReplyTo("capri.phamdinhhung@gmail.com", "aizo.com");
        $mail->IsHTML(true);
        $mail->Subject = $subject;
        $mail->Body = "<div>$content</div>";
        $mail->AltBody = 'Plain text message body for non-HTML email client. Gmail SMTP email body.';
        $mail->send();
        return true;
    } catch (Exception $e) {
        return "Error in sending email. Mailer Error: {$mail->ErrorInfo}";
    }
}
