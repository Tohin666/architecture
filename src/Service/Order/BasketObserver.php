<?php

namespace Service\Order;

use Service\Communication\Email;
use SplObserver;
use SplSubject;

class BasketObserver implements SplObserver
{
    public function update(SplSubject $subject)
    {
        $EmailSender = new Email();
        $EmailSender->send("Вы успешно оформили заказ!");
    }


}