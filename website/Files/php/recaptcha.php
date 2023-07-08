<?php
$reCAPTCHA  = filter_input( INPUT_POST, 'reCAPTCHA', FILTER_SANITIZE_STRING );
$captchaUrl = 'https://www.google.com/recaptcha/api/siteverify';

$captchaData = array(
    'secret'   => '6LegxZAjAAAAAIW0DySstHd2R37QY3cCM-BFBHLh',
    'response' => $reCAPTCHA
);

$captchaSettings = array(
    'http'    => array(
    'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
    'method'  => 'POST',
    'content' => http_build_query( $captchaData )
    )
);

$captchaContext  = stream_context_create( $captchaSettings );
$captchaResponse = file_get_contents( $captchaUrl, false, $captchaContext );
$reCAPTCHA       = json_decode($captchaResponse, true);