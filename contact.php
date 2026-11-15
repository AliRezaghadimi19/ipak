<?php
// Consultation form handler for IPAK Business Consulting.
// Receives a JSON POST from index.html and emails it to the office inbox.

declare(strict_types=1);

const RECIPIENT   = 'info@ipakservices.com';
const SENDER      = 'info@ipakservices.com';
const RATE_LIMIT  = 5;     // max submissions per IP
const RATE_WINDOW = 3600;  // per this many seconds

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function respond(int $code, array $body): void
{
    http_response_code($code);
    echo json_encode($body);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'Method not allowed.']);
}

$raw = file_get_contents('php://input', false, null, 0, 20000);
$data = json_decode($raw ?: '', true);
if (!is_array($data)) {
    $data = $_POST;
}

// Honeypot: real users never fill this hidden field.
if (!empty($data['website'])) {
    respond(200, ['ok' => true]);
}

function field(array $data, string $key, int $max): string
{
    $value = isset($data[$key]) && is_scalar($data[$key]) ? trim((string) $data[$key]) : '';
    return mb_substr($value, 0, $max);
}

function oneLine(string $value): string
{
    return trim(preg_replace('/[\r\n\t]+/', ' ', $value));
}

$name         = oneLine(field($data, 'name', 120));
$businessName = oneLine(field($data, 'businessName', 160));
$email        = oneLine(field($data, 'email', 200));
$phone        = oneLine(field($data, 'phone', 40));
$topic        = oneLine(field($data, 'topic', 120));
$message      = field($data, 'message', 5000);

if ($name === '' || $email === '') {
    respond(422, ['ok' => false, 'error' => 'Please provide your name and email address.']);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'Please provide a valid email address.']);
}

// Simple per-IP rate limit stored in the system temp directory.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . '/ipak_contact_' . hash('sha256', $ip);
$now = time();
$hits = [];
if (is_file($rateFile)) {
    $hits = array_filter(
        array_map('intval', explode(',', (string) @file_get_contents($rateFile))),
        fn ($t) => $t > $now - RATE_WINDOW
    );
}
if (count($hits) >= RATE_LIMIT) {
    respond(429, ['ok' => false, 'error' => 'Too many submissions. Please email us directly at ' . RECIPIENT . '.']);
}
$hits[] = $now;
@file_put_contents($rateFile, implode(',', $hits), LOCK_EX);

$subject = 'New consultation enquiry: ' . ($businessName !== '' ? $businessName : $name);
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

$body = "New consultation enquiry from ipakservices.com\n"
      . str_repeat('-', 48) . "\n"
      . "Name:          {$name}\n"
      . "Business:      " . ($businessName !== '' ? $businessName : '-') . "\n"
      . "Email:         {$email}\n"
      . "Phone:         " . ($phone !== '' ? $phone : '-') . "\n"
      . "Focus area:    " . ($topic !== '' ? $topic : '-') . "\n"
      . str_repeat('-', 48) . "\n"
      . "Message:\n" . ($message !== '' ? $message : '-') . "\n\n"
      . "Submitted: " . gmdate('Y-m-d H:i:s') . " UTC from {$ip}\n";

$headers = implode("\r\n", [
    'From: IPAK Website <' . SENDER . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: IPAK-Website',
]);

$sent = mail(RECIPIENT, $encodedSubject, $body, $headers, '-f' . SENDER);

if (!$sent) {
    respond(500, ['ok' => false, 'error' => 'We could not send your enquiry. Please email us directly at ' . RECIPIENT . '.']);
}

respond(200, ['ok' => true]);
