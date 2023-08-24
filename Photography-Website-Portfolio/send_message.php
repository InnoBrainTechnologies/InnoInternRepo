<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $botToken = '5899351920:AAHDdA-y-jXuRLi6US5EjJhgzmSwuja3_bs';
    $chatId = '835275615';

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $text = "
        New Contact Form Submission:
        Name: $name
        Email: $email
        Subject: $subject
        Message: $message
    ";

    $apiUrl = "https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=" . urlencode($text);

    $response = file_get_contents($apiUrl);

    if ($response) {
        $responseData = json_decode($response, true);
        if ($responseData['ok']) {
            echo json_encode(array('success' => true));
        } else {
            echo json_encode(array('success' => false));
        }
    } else {
        echo json_encode(array('success' => false));
    }
} else {
    echo json_encode(array('success' => false));
}
?>
