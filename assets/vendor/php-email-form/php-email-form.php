<?php

class PHP_Email_Form {

  public $to;
  public $from_name;
  public $from_email;
  public $subject;
  public $message;
  public $headers;

  public function send() {
    $this->headers = "From: $this->from_name <$this->from_email>" . "\r\n";
    $this->headers .= "Reply-To: $this->from_email" . "\r\n";
    $this->headers .= "MIME-Version: 1.0" . "\r\n";
    $this->headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    return mail($this->to,$this->subject,$this->message,$this->headers);
  }

}

?>
